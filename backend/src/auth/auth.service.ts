import { Injectable, ForbiddenException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && (await bcrypt.compare(pass, user.password))) {
            const { password, ...result } = user.toObject();
            return result;
        }
        return null;
    }

    async login(user: any) {
        const tokens = await this.getTokens(user._id, user.email, user.name);
        await this.updateRefreshToken(user._id.toString(), tokens.refreshToken);
        return {
            ...tokens,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                playlist: user.playlist,
                role: user.role,
                joinedAt: user.createdAt,
            },
        };
    }

    async signup(user: any) {
        const newUser = await this.usersService.create(user);
        return this.login(newUser);
    }

    async logout(userId: string) {
        return this.usersService.update(userId, { refreshToken: null });
    }

    async refreshTokens(userId: string, refreshToken: string) {
        const user = await this.usersService.findById(userId);
        if (!user || !user.refreshToken)
            throw new ForbiddenException('Access Denied');

        const refreshTokenMatches = await bcrypt.compare(
            refreshToken,
            user.refreshToken,
        );
        if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');

        const tokens = await this.getTokens(user._id.toString(), user.email, user.name);
        await this.updateRefreshToken(user._id.toString(), tokens.refreshToken);
        return tokens;
    }

    async updateRefreshToken(userId: string, refreshToken: string) {
        const hash = await bcrypt.hash(refreshToken, 10);
        await this.usersService.update(userId, { refreshToken: hash });
    }

    async getTokens(userId: string, email: string, name: string) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: userId,
                    email,
                    name,
                },
                {
                    secret: jwtConstants.secret,
                    expiresIn: '15m',
                },
            ),
            this.jwtService.signAsync(
                {
                    sub: userId,
                    email,
                    name,
                },
                {
                    secret: jwtConstants.refreshSecret,
                    expiresIn: '7d',
                },
            ),
        ]);

        return {
            accessToken,
            refreshToken,
        };
    }
}

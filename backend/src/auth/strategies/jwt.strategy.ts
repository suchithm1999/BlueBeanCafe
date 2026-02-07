import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // Check if user still exists in the database
    const user = await this.usersService.findById(payload.sub);
    if (!user) {
      return null; // Will return 401 Unauthorized
    }
    return { userId: payload.sub, email: payload.email, name: payload.name };
  }
}

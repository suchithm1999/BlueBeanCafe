import {
    Controller,
    Request,
    Post,
    UseGuards,
    Get,
    Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('signup')
    async signup(@Body() createUserDto: any) {
        return this.authService.signup(createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('logout')
    async logout(@Request() req) {
        return this.authService.logout(req.user.userId);
    }

    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('refresh')
    async refresh(@Request() req) {
        const userId = req.user['sub'];
        const refreshToken = req.user['refreshToken'];
        return this.authService.refreshTokens(userId, refreshToken);
    }
}

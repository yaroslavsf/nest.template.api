import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ApiTags} from "@nestjs/swagger";
import {SignInDTO} from "./dto/signInDTO";
import {SignUpDTO} from "./dto/signUpDTO";
import {JwtAuthGuard} from "../common/guards/jwt.guard";
import {Roles} from "../common/guards/roles.decorator";
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDTO) :  Promise<{ accessToken: string }> {
        return this.authService.signIn(signInDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    signUp(@Body() signUpDto: SignUpDTO): Promise<{ accessToken: string }> {
        return this.authService.signUp(signUpDto);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard)
    @Get('secured')
    public secured(): string {
        return "response";
    }

    @Roles('admin')
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard)
    @Get('admin')
    public admin(): string {
        return "response";
    }
}
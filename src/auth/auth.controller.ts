import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ApiTags} from "@nestjs/swagger";
import {SignInDTO} from "./dto/signInDTO";
import {SignUpDTO} from "./dto/signUpDTO";;
import {JwtAuthGuard} from "./jwt.guard";
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
    signUp(@Body() signUpDto: SignUpDTO) {
        return this.authService.signUp(signUpDto);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard)
    @Get('secured')
    public test(): string {
        return "response";
    }
}
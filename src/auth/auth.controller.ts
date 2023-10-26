import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {User} from "../users/user.entity";
import {ApiTags} from "@nestjs/swagger";
import {SignInDTO} from "./dto/signInDTO";
import {SignUpDTO} from "./dto/signUpDTO";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDTO) {
        return this.authService.signIn(signInDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    signUp(@Body() signUpDto: SignUpDTO) {
        return this.authService.signUp(signUpDto);
    }

}
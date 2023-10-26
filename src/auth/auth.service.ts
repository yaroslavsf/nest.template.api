import { Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../users/user.service";
import {User} from "../users/user.entity";
import {SignInDTO} from "./dto/signInDTO";
import {SignUpDTO} from "./dto/signUpDTO";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signIn(signInDto: SignInDTO): Promise<User> {
        const user = await this.userService.findByEmail(signInDto.email);
        if (!user) {
            throw new UnauthorizedException("user is not signed up")
        }
        if (user?.password !== signInDto.password) {
            throw new UnauthorizedException();
        }
        return user;
    }

    async signUp(signUpDto: SignUpDTO): Promise<User> {
       return this.userService.create(signUpDto)
    }
}

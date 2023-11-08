import { Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../users/user.service";
import {User} from "../users/user.entity";
import {SignInDTO} from "./dto/signInDTO";
import {SignUpDTO} from "./dto/signUpDTO";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}
    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.userService.findByEmail(email)
        if (user && bcrypt.compareSync(password, user.password)) {
            return user;
        }
        return null;
    }

    async signIn(signInDto: SignInDTO): Promise<{ accessToken: string }> {
        const user = this.validateUser(signInDto.email, signInDto.password)
        if (!user) {
            throw new UnauthorizedException();
        }
        const payload = { sub: (await user).id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async signUp(signUpDto: SignUpDTO): Promise<{ accessToken: string }> {
        signUpDto.password = await bcrypt.hash(signUpDto.password, 10)
        const user = await this.userService.create(signUpDto)
        const payload = { sub: (await user).id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}

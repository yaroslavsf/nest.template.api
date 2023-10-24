import {ConflictException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../users/user.service";
import {User} from "../users/user.entity";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signIn(username: string, pass: string): Promise<User> {
        const user = await this.userService.findByEmail(username);
        if (!user) {
            throw new UnauthorizedException("user is not signed up")
        }
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        return user;
    }

    async signUp(signUpDto: User): Promise<User> {
       return this.userService.create(signUpDto)
    }
}

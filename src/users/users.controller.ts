import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { IUser } from "./interfaces/IUser.interface";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  
  @Get("/")
  async createUser() {
    const user: IUser = {
        email: "",
        name: "",
        surname: ""
    }
    return this.usersService.create(user);
  }
}
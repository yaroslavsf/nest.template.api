import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Role} from "../roles/role.entity";
import {RoleService} from "../roles/roles.service";

@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    controllers: [UserController],
    providers: [UserService, RoleService],
})
export class UserModule {}
import {Role} from "./role.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {RoleService} from "./roles.service";

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    providers: [RoleService],
    exports: [RoleService]
})
export class RoleModule {}
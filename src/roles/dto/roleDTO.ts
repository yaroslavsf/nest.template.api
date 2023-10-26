import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsEmail, IsNotEmpty, IsString} from "class-validator";

export class RoleDTO {
    @ApiProperty({
        type: String,
        example: 'admin',
        description: 'Role name',
    })
    @IsString()
    @IsDefined()
    @IsEmail()
    @IsNotEmpty()
    // @Transform((role:Role) => role.name)
    name: string;
}
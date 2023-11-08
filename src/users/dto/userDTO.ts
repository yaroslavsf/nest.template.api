import {IsDefined, IsEmail, IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Exclude, Type} from "class-transformer";
import {RoleDTO} from "../../roles/dto/roleDTO";

export class UserDTO {
    @ApiProperty({
        type: String,
        example: 'b92a3fde-3f3c-4727-a357-a8dd0e066f26',
        description: 'UUID of the user',
    })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    id: string;
    @ApiProperty({
        type: String,
        example: 'some name',
        description: 'Name of user',
    })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    name: string;
    @ApiProperty({
        type: String,
        example: 'some surname',
        description: 'Surname of user',
    })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    surname: string;

    @Exclude()
    password: string;

    @ApiProperty({
        type: String,
        example: 'admin@gmail.com',
        description: 'Email of user',
    })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Type(() => RoleDTO)
    roles: RoleDTO[];
}
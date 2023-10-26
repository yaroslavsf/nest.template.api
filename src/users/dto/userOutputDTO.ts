import {IsDefined, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {RoleDTO} from "../../roles/dto/roleDTO";

export class UserOutputDTO {
    @ApiProperty({
        type: String,
        example: '09171a1f-18a8-4023-8439-5c7dcd455e76',
        description: 'UUID of the user',
    })
    @IsString()
    @IsDefined()
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @ApiProperty({
        type: String,
        example: 'email@gmail.com',
        description: 'Email of user',
    })
    @IsString()
    @IsDefined()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: String,
        required: false,
        example: 'Name',
        description: 'User name',
    })
    @IsString()
    @IsOptional()
    @IsEmail()
    name: string;

    @ApiProperty({
        type: String,
        required: false,
        example: 'Surname',
        description: 'User surname',
    })
    @IsString()
    @IsOptional()
    @IsEmail()
    surname: string;

    @ApiProperty({
        type: RoleDTO,
        description: 'Roles of the user',
    })
    roles: RoleDTO;
}
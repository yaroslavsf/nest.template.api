import {IsDefined, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class SignUpDTO {
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
        type: String,
        example: 'QWE123',
        description: 'Password of the user',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}
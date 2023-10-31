import {IsDefined, IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class SignInDTO {
    @ApiProperty({
        type: String,
        example: 'admin@gmail.com',
        description: 'Email of user',
    })
    @IsString()
    @IsDefined()
    @IsEmail()
    @IsNotEmpty()
    email: string;

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
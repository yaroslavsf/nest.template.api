import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsString} from "class-validator";
import {Exclude, Expose} from "class-transformer";

export class RoleDTO {
    @Exclude()
    id: string;

    @ApiProperty({
        type: String,
        example: 'user',
        description: 'Name of the role',
    })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @Expose()
    name: string;
}
import {Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {ApiTags} from "@nestjs/swagger";
import {User} from "./user.entity";
import {UserDTO} from "./dto/userDTO";
import {plainToInstance} from 'class-transformer';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @Get(':id')
    public async get(@Param('id') id: string): Promise<UserDTO> {
        return plainToInstance(UserDTO, await this.userService.findById(id));
    }
    @Get()
    public async getAll(): Promise<UserDTO[]> {
        return plainToInstance(UserDTO, await this.userService.findAll()) ;
    }

    @Post()
    public async create(@Body() user: User): Promise<UserDTO> {
        return plainToInstance(UserDTO, this.userService.create(user));
    }

    @Put('/:id')
    public async updateById(@Param('id', new ParseUUIDPipe()) id: string, @Body() user: User): Promise<User> {
        return plainToInstance(UserDTO, await this.userService.update(id, user));
    }

    @Delete('/:id')
    public deleteById(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
        return this.userService.delete(id);
    }
}
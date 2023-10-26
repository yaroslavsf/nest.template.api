import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {ApiTags} from "@nestjs/swagger";
import {User} from "./user.entity";

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @Get(':id')
    public get(@Param('id') id: string): Promise<User> {
        return this.userService.findById(id);
    }
    @Get()
    public getAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    public create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put()
    public updateById(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete()
    public deleteById(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    }
}
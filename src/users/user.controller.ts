import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {User} from "./user.entity";
import {UserService} from "./user.service";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @Get(':id')
    public get(@Param('id') id: string): Promise<User | null> {
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
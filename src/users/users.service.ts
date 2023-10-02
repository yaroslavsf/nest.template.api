import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { IUser } from './interfaces/IUser.interface';

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
      ) {}
      
    async create(user: IUser) : Promise<IUser> {

        const createdUser = await this.prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                surname: user.surname,
            },
        });

        return createdUser;
    }

    
}

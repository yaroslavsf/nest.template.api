import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { IUser } from './interfaces/IUser.interface';
import { Prisma } from '@prisma/client';
import { IRole } from 'src/roles/interfaces/IRole.interface';

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) { }

    async save(user: IUser): Promise<IUser> {

        const createdUser = await this.prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                roles: {
                    connect:
                        user.roles.map((role) => (
                            {
                                userId_roleId: { userId: user.id, roleId: role.id }
                            }
                        )),
                },
            },
            include: { roles: true }, // Include the roles when creating the user
        });

        return createdUser;
    }
    // user.roles.map((role) => ({ userId: user.id, roleId: role.id })),
    async deleteById(): Promise<void> {

    }

    async updateById(): Promise<void> {

    }

    async findAll(): Promise<void> {

    }

    async findById(): Promise<void> {

    }

    async existsById(): Promise<void> {

    }
}
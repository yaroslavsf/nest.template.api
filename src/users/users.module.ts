import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from './users.repository';

@Module({
  providers: [UsersRepository, UsersService, PrismaService]
})
export class UsersModule {}

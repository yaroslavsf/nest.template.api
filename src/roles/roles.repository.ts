import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RolesRepository {
    constructor(private prisma: PrismaService) {}
    
    async save() : Promise<void> {

    }

    async deleteById() : Promise<void> {

    }

    async updateById() : Promise<void> {

    }

    async findAll() : Promise<void> {

    }

    async findById() : Promise<void> {

    }

    async existsById() : Promise<void> {

    }
}
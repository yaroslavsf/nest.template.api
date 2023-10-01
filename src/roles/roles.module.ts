import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { RolesRepository } from './roles.repository';
import { RolesService } from './roles.service';


@Module({
  providers: [RolesRepository, RolesService, PrismaService]
})
export class RolesModule {}

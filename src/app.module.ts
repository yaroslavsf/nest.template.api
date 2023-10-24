import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './main.config';
import { LoggerModule } from './logger/logger.module';
import {UserModule} from "./users/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {dataSourceOptions} from "./db/db-source";
import {RoleModule} from "./roles/role.module";
import { AuthModule } from './auth/auth.module';

@Module({
  imports : [
    LoggerModule,
    ConfigModule.forRoot(configOptions),
    TypeOrmModule.forRoot(dataSourceOptions),
    RoleModule,
    UserModule,
    AuthModule,
    //other modulers, like AuthModule or UsersModule
  ]
})
export class AppModule {}

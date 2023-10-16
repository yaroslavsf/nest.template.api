import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './main.config';
import { LoggerModule } from './logger/logger.module';
import {UserModule} from "./users/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {dataSourceOptions} from "./db/db-source";
import {RoleModule} from "./roles/role.module";

@Module({
  imports : [
    LoggerModule,
    ConfigModule.forRoot(configOptions),
    TypeOrmModule.forRoot(dataSourceOptions),
    RoleModule,
    UserModule,
    //other modulers, like AuthModule or UsersModule
  ]
})
export class AppModule {}

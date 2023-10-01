import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './main.config';
import { LoggerModule } from './logger/logger.module';
import { UsersModule } from './users/users.module';

@Module({
  imports : [
    LoggerModule,
    ConfigModule.forRoot(configOptions),
    UsersModule,
    //other modulers, like AuthModule or UsersModule
  ]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './main.config';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports : [
    LoggerModule,
    ConfigModule.forRoot(configOptions),
    //other modulers, like AuthModule or UsersModule
  ]
})
export class AppModule {}

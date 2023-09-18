import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmthModule } from './smth/smth.module';

@Module({
  imports: [SmthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

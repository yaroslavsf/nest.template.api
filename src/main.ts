import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

class Application {
  public async bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    await app.listen(8000);
  }
}

const app = new Application();

app.bootstrap();

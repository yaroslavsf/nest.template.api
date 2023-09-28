import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EConfigEnvironment } from './common/enums';
import * as cors from 'cors';
import helmet from 'helmet'
import { corseConfig, helmetConfig } from './main.config';
import { LoggerService } from './logger/logger.service';
import { ErrorsInterceptor } from './common/interceptors';

class Application {
  public configService: ConfigService;
  public loggerService: LoggerService;

  private app: INestApplication;

  constructor() {
    this.loggerService = new LoggerService('Dance API');
  }

  public async bootstrap(): Promise<void> {
    //create app + connect logger
    this.app = await NestFactory.create(AppModule, {
      logger: this.loggerService,
    });

    //setup
    this.configService = this.app.get(ConfigService);
    const nodeEnv = this.configService.get<EConfigEnvironment>('NODE_ENV');
    const PORT = this.configService.get<number>('PORT') || 4200;
    this.app.setGlobalPrefix('api');

    this.app.use(helmet(helmetConfig));
    this.app.use(cors(corseConfig));

    //environment condition
    if (nodeEnv === EConfigEnvironment.production) {
      console.log("production");
    } else if (nodeEnv === EConfigEnvironment.development) {
      console.log("development");
    }

    //logger settings
    this.app.useGlobalInterceptors(
      new ErrorsInterceptor(this.loggerService, this.configService),
    );
    this.useListeners();

    //listening the server
    this.app
      .listen(PORT)
      .then(() =>
        this.loggerService.log(`Application was started on PORT ${PORT}`),
      )
      .catch((e) => this.loggerService.error(e));
  }

  private useListeners(): void {
    process.on('unhandledRejection', (reason: any): void => {
      this.loggerService.error(
        reason.toString(),
        reason.stack || reason,
        'Unhandled Rejection',
      );
      process.exit(1);
    });

    process.on('uncaughtException', (err: any): void => {
      this.loggerService.error({ err }, 'Uncaught Exception');
      process.exit(1);
    });

    process.on('warning', (err: any): void => {
      this.loggerService.error({ err }, 'Warning detected');
    });

    process.on('exit', (code): void => {
      this.loggerService.warn(`Stopped with code: ${code}`);
    });
  }
}

const app = new Application();

app.bootstrap();
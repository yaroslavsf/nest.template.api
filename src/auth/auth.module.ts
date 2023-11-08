import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../users/user.module";
import { PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "../common/guards/jwt.strategy";

@Module({
  imports: [UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'yourSecretKey', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),],
  controllers: [AuthController],
  providers: [
      AuthService,
    JwtStrategy,
    ]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config, { AppConfig } from './config';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { stdTimeFunctions } from 'pino';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        timestamp: stdTimeFunctions.isoTime,
      },
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService<AppConfig>) => {
        return {
          uri: configService.get('mongoUri'),
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    HealthModule,
  ],
})
export class AppModule {}

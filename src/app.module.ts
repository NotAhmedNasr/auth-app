import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config, { AppConfig } from './config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
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
  ],
})
export class AppModule {}

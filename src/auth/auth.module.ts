import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './controllers/auth.controller';
import { UserService } from './services/user.service';
import { User, UserSchema } from './models/user.model';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService],
})
export class AuthModule {}

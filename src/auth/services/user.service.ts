import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from '../models/user.model';
import { SignUpDto } from '../dtos/signUp.dto';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {}
  private readonly logger = new Logger(UserService.name);
  async create(dto: SignUpDto) {
    try {
      const user = await this.userModel.create({
        email: dto.email,
        name: dto.name,
        password: dto.password,
      });

      return user;
    } catch (err) {
      if (err.code === 11000) throw new BadRequestException('duplicate email');
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }
}

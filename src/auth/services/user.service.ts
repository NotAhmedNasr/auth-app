import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from '../models/user.model';
import { SignUpDto } from '../dtos/signUp.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {}
  async create(dto: SignUpDto) {
    const user = await this.userModel.create({
      email: dto.email,
      name: dto.name,
      password: dto.password,
    });

    return user;
  }
}

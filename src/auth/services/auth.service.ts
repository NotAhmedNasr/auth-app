import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async getTokenForUser(user: UserDocument) {
    return this.jwtService.signAsync({ id: user._id });
  }
}

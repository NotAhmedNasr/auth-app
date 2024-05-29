import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { SignUpDto } from '../dtos/signUp.dto';
import { AuthService } from '../services/auth.service';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() dto: SignUpDto) {
    const user = await this.userService.create(dto);
    const token = await this.authService.getTokenForUser(user);
    return { token, user: user.toJSON() };
  }
}

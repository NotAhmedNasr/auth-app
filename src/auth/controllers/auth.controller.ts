import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { SignUpDto } from '../dtos/signUp.dto';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: UserService,
    private readonly userService: UserService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() dto: SignUpDto) {
    const user = await this.userService.create(dto);
    return user.toJSON();
  }
}

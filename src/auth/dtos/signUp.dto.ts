import { IsEmail, IsString, IsStrongPassword, Matches } from 'class-validator';

const passwordErrorMsg =
  'password must be at least 8 characters and must contain at least 1 letter, 1 number and 1 special character';

export class SignUpDto {
  @IsEmail({}, { message: 'email is invalid' })
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
      minLowercase: 0,
      minUppercase: 0,
    },
    {
      message: passwordErrorMsg,
    },
  )
  @Matches(/[a-zA-Z]+/, {
    message: passwordErrorMsg,
  })
  password: string;

  @IsString()
  // a single word or multiple words with spaces between
  @Matches(/^[a-zA-Z]+(\s([a-zA-Z]+\s)*[a-zA-Z]+)?$/, {
    message: 'name is invalid',
  })
  name: string;
}

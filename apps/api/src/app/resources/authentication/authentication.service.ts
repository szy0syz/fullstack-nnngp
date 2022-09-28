import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    //TODO
    return this.userService.findOne({
      where: { email },
    });
  }

  login(loginInput: LoginInput) {
    return { id: loginInput.email, email: loginInput.email };
  }

  async signUp(signUpInput: LoginInput) {
    const { email, password: plainPassword } = signUpInput;
    const password = await bcrypt.hash(plainPassword, 10);

    return this.userService.create({ data: { email, password } });
  }
}

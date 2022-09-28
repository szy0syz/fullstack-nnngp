import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { LoginInput } from './dto/login.input';
import { User } from '@fullstack/api/generated/db-types';

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Mutation(() => User)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authenticationService.login(loginInput);
  }

  @Mutation(() => User)
  signUp(@Args('loginInput') loginInput: LoginInput) {
    console.log('loginInput', loginInput)
    return this.authenticationService.signUp(loginInput);
  }
}

import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { LoginInput } from './dto/login.input';
import { User } from '@fullstack/api/generated/db-types';
import { UseGuards } from '@nestjs/common';
import { SetAuthGuard } from '../../guards/auth-guard/set-auth.guard';
import { IUserContext } from '../../guards/auth-guard/types';

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(SetAuthGuard)
  @Mutation(() => User)
  login(@Args('loginInput') _: LoginInput, @Context() context: IUserContext) {
    const { user } = context;
    return this.authenticationService.login(user);
  }

  @Mutation(() => User)
  signUp(@Args('signUpInput') signUpInput: LoginInput) {
    return this.authenticationService.signUp(signUpInput);
  }
}

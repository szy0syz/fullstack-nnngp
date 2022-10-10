import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UpdateOneUserArgs,
  User,
} from '@fullstack/api/generated/db-types';

import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { CheckAuthGuard } from '../../guards/auth-guard/check-auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(CheckAuthGuard)
  @Query(() => User)
  user(@Args() findUserArguments: FindUniqueUserArgs) {
    return this.userService.findOne(findUserArguments);
  }

  @UseGuards(CheckAuthGuard)
  @Query(() => [User])
  users(@Args() findUsersArguments: FindManyUserArgs) {
    return this.userService.findAll(findUsersArguments);
  }

  @UseGuards(CheckAuthGuard)
  @Mutation(() => User)
  createUser(@Args() userCreateArguments: CreateOneUserArgs) {
    return this.userService.create(userCreateArguments);
  }

  @UseGuards(CheckAuthGuard)
  @Mutation(() => User)
  updateUser(@Args() userUpdateInput: UpdateOneUserArgs) {
    return this.userService.update(userUpdateInput);
  }

  @UseGuards(CheckAuthGuard)
  @Mutation(() => User)
  removeUser(@Args() removeUserArguments: FindUniqueUserArgs) {
    return this.userService.remove(removeUserArguments);
  }
}

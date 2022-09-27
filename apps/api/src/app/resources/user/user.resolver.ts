import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  User,
} from '@fullstack/api/generated/db-types';

import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  user(@Args() findUserArgs: FindUniqueUserArgs) {
    return this.userService.findOne(findUserArgs);
  }

  @Query(() => [User])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args() userCreateArgs: CreateOneUserArgs) {
    return this.userService.create(userCreateArgs);
  }

  @Mutation(() => User)
  updateUser(@Args() userUpdateInput: UpdateOneUserArgs) {
    return this.userService.update(userUpdateInput);
  }

  @Mutation(() => User)
  removeUser(@Args() removeUserArgs: FindUniqueUserArgs) {
    return this.userService.remove(removeUserArgs);
  }
}

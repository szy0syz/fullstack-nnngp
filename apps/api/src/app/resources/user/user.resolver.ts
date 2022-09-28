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
  user(@Args() findUserArguments: FindUniqueUserArgs) {
    return this.userService.findOne(findUserArguments);
  }

  @Query(() => [User])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args() userCreateArguments: CreateOneUserArgs) {
    return this.userService.create(userCreateArguments);
  }

  @Mutation(() => User)
  updateUser(@Args() userUpdateInput: UpdateOneUserArgs) {
    return this.userService.update(userUpdateInput);
  }

  @Mutation(() => User)
  removeUser(@Args() removeUserArguments: FindUniqueUserArgs) {
    return this.userService.remove(removeUserArguments);
  }
}

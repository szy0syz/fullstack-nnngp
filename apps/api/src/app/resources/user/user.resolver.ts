import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  User
} from "@fullstack1/api/generated/db-types";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args() userCreateArguments: CreateOneUserArgs) {
    return this.userService.create(userCreateArguments)
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() findUserArgs: FindUniqueUserArgs) {
    return this.userService.findOne(findUserArgs);
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

import { DbService } from '@fullstack/api/data-access-db';
import { Injectable } from '@nestjs/common';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from '@fullstack/api/generated/db-types';

@Injectable()
export class UserService {
  constructor(private readonly database: DbService) {}

  findOne(findUserArguments: FindUniqueUserArgs) {
    return this.database.user.findUnique(findUserArguments);
  }

  findAll() {
    return this.database.user.findMany();
  }

  create(userCreateArguments: CreateOneUserArgs) {
    return this.database.user.create(userCreateArguments);
  }

  update(userUpdateInput: UpdateOneUserArgs) {
    return this.database.user.update(userUpdateInput);
  }

  remove(removeUserArguments: FindUniqueUserArgs) {
    return this.database.user.delete(removeUserArguments);
  }
}

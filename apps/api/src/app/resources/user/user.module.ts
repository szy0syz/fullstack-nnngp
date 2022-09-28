import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DbService } from '@fullstack/api/data-access-db';

@Module({
  providers: [UserResolver, UserService, DbService],
  exports: [UserService]
})
export class UserModule {}

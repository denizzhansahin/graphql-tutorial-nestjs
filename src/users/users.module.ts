import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserResolver } from 'src/graphql/resolvers/UserResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';

@Module({
  controllers: [],
  providers: [UserResolver,UsersService],
  exports: [UsersService],
  imports:[
    TypeOrmModule.forFeature([User])
  ]
})
export class UsersModule {}

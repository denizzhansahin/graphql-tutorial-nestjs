import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserResolver } from 'src/graphql/resolvers/UserResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettingService } from './UserSettingsService';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { UserSettingResolver } from 'src/graphql/resolvers/UserSettingsResolver';

@Module({
  controllers: [],
  providers: [UserResolver,UsersService,UserSettingService,UserSettingResolver],
  exports: [UsersService,UserSettingService],
  imports:[
    TypeOrmModule.forFeature([User,UserSetting])
  ]
})
export class UsersModule {}

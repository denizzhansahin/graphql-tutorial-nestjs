import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './graphql/resolvers/UserResolver';
import { UserSettingResolver } from './graphql/resolvers/UserSettingsResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSetting } from './graphql/models/UserSetting';
import { User } from './graphql/models/User';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver:ApolloDriver,
    autoSchemaFile:'src/schema.gql'
  }),
  TypeOrmModule.forRoot({ //veya getCongig
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: true,
    logging: false,
    entities: [User,UserSetting],
    migrations: [],
    subscribers: [],
  }),
  UsersModule,
],
  controllers: [],
  providers: [UserResolver,UserSettingResolver],
})
export class AppModule {}





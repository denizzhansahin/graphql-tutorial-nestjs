//user modeli için çözümleyici

import { Resolver ,Query, Args, Int, ResolveField, Parent,Mutation} from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/_mocks_/mockUsers";
import { UserSetting } from "../models/UserSetting";
import { mockUsersSettings } from "src/_mocks_/mockUserSettings";
import { CreateUserInput } from "../utils/CreateUserInputs";
import { Inject } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { UserSettingService } from "src/users/UserSettingsService";



export let incrementalId = 3


@Resolver(of=>User)
export class UserResolver {

    constructor(private usersService:UsersService, private usersSettingsService:UserSettingService){}

    @Query((returns)=>User,{nullable:true})
    getUserById(@Args('id',{type:()=>Int}) id:number){
        return this.usersService.getUserById(id)
    }

    @Query(()=>[User])
    getUsers(){
        return this.usersService.getUsers()
    }

/*
    @ResolveField(returns=>UserSetting,{name:'settings',nullable:true})
    getUserSettings(@Parent() user:User){
        console.log(user)
        return this.usersSettingsService.getUserSettingById(user.id)
    }
*/

    @Mutation((returns)=>User)
    createUser(
        @Args('createdUserData') createdUserData : CreateUserInput,
    ) {
        return this.usersService.createUser(createdUserData)
    }
}
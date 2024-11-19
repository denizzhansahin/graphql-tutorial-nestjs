//user modeli için çözümleyici

import { Resolver ,Query, Args, Int, ResolveField, Parent,Mutation} from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/_mocks_/mockUsers";
import { UserSetting } from "../models/UserSetting";
import { mockUsersSettings } from "src/_mocks_/mockUserSettings";



export let incrementalId = 3


@Resolver(of=>User)
export class UserResolver {
    @Query((returns)=>User,{nullable:true})
    getUserById(@Args('id',{type:()=>Int}) id:number){
        return mockUsers.find((user)=>user.id===id)
    }

    @Query(()=>[User])
    getUsers(){
        return mockUsers
    }

    @ResolveField(returns=>UserSetting,{name:'settings',nullable:true})
    getUserSettings(@Parent() user:User){
        console.log(user)
        return mockUsersSettings.find((setting)=>setting.userId===user.id)
    }

    @Mutation((returns)=>User)
    createUser(
        @Args('username') username : string,
        @Args('displayName', {nullable:true}) displayName:string
    ) {
        const newUser = {username,displayName,id:++incrementalId}
        mockUsers.push(newUser)
        return newUser
    }
}
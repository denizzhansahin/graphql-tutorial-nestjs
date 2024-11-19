import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { UserSetting } from "../models/UserSetting";
import { createUserSettingsInput } from "../utils/CreateUserSettingsInputs";
import { UserSettingService } from "src/users/UserSettingsService";

@Resolver()
export class UserSettingResolver {
    constructor(private usersSettingsService:UserSettingService){}
    @Mutation(returns=>UserSetting)
    async createUserSettings(@Args('createUserSettingData') createUserSettingsData:createUserSettingsInput){
        console.log(createUserSettingsData)
        const userSetting = await this.usersSettingsService.createUserSettings(
            createUserSettingsData,
        )
        console.log(userSetting)
        return userSetting
    }
}
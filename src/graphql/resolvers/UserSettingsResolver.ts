import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { UserSetting } from "../models/UserSetting";
import { createUserSettingsInput } from "../utils/CreateUserSettingsInputs";
import { mockUsersSettings } from "src/_mocks_/mockUserSettings";

@Resolver()
export class UserSettingResolver {
    @Mutation(returns=>UserSetting)
    createUserSettings(@Args('createUserSettingData') createUserSettingsData:createUserSettingsInput){
        console.log(createUserSettingsData)
        mockUsersSettings.push(createUserSettingsData)
        return createUserSettingsData
    }
}
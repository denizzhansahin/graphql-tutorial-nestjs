import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/graphql/models/User";
import { UserSetting } from "src/graphql/models/UserSetting";
import { createUserSettingsInput } from "src/graphql/utils/CreateUserSettingsInputs";
import { Repository } from "typeorm";


@Injectable()
export class UserSettingService {
    constructor(
        @InjectRepository(UserSetting)
        private userSettingRepository:Repository<UserSetting>,
        @InjectRepository(User)
        private userRepository : Repository<User>
    ) {

    }

    getUserSettingById(userId:number) {
        return this.userSettingRepository.findOneBy({userId})
    }


    async createUserSettings(createUsersSettingsData:createUserSettingsInput) {
        const findUser = await this.userRepository.findOneBy({
            id:createUsersSettingsData.userId,
        })
        if(!findUser) throw new Error('User not found')

        const newUserSetting = this.userSettingRepository.create(createUsersSettingsData)
        const savedSettings = await this.userSettingRepository.save(newUserSetting)
        findUser.settings = savedSettings
        await this.userRepository.save(findUser)

        return savedSettings
        
    }
}
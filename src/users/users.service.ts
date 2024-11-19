import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInputs';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository:Repository<User>){}

    getUsers() {
        return this.usersRepository.find({relations:['settings']})
    }

    createUser(createUserData:CreateUserInput){
        const newUser = this.usersRepository.create(createUserData)
        return this.usersRepository.save(newUser)
    }

    getUserById(id:number){
        return this.usersRepository.findOne({where:{id},relations:['settings']})
    }
}

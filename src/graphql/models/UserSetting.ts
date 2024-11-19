import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user_settings'})
@ObjectType()
export class UserSetting {
    @PrimaryGeneratedColumn()
    @Field((type)=>Int)
    userId:number

    @Column({default:false})
    @Field({defaultValue:false, nullable:true})
    receiveNotifications:boolean


    @Column({default:false})
    @Field({defaultValue:false, nullable:true})
    receiveEmails:boolean
}
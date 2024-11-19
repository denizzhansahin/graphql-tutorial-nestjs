import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserSetting } from "./UserSetting";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

//user shcema, user bir için bir model gibi
@Entity({name:'users'})
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field((type)=>Int)
    id:number

    @Column()
    @Field()
    username:string

    @Column()
    @Field({nullable:true})
    displayName?:string

    @OneToOne(()=>UserSetting)
    @JoinColumn()
    @Field({nullable:true})
    settings?: UserSetting
}
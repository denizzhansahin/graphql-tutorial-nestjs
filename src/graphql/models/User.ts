import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserSetting } from "./UserSetting";


//user shcema, user bir için bir model gibi
@ObjectType()
export class User {
    @Field((type)=>Int)
    id:number

    @Field()
    username:string

    @Field({nullable:true})
    displayName?:string

    @Field({nullable:true})
    settings?: UserSetting
}
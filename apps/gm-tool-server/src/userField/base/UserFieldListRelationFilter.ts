/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserFieldWhereInput } from "./UserFieldWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserFieldListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => UserFieldWhereInput)
  @IsOptional()
  @Field(() => UserFieldWhereInput, {
    nullable: true,
  })
  every?: UserFieldWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => UserFieldWhereInput)
  @IsOptional()
  @Field(() => UserFieldWhereInput, {
    nullable: true,
  })
  some?: UserFieldWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => UserFieldWhereInput)
  @IsOptional()
  @Field(() => UserFieldWhereInput, {
    nullable: true,
  })
  none?: UserFieldWhereInput;
}
export { UserFieldListRelationFilter as UserFieldListRelationFilter };

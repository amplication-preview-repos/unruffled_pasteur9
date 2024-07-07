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
import { EnumUserFieldTypeField } from "./EnumUserFieldTypeField";
import { IsEnum, IsOptional, IsString, MaxLength } from "class-validator";
import { EnumUserFieldEntity } from "./EnumUserFieldEntity";

@InputType()
class UserFieldUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumUserFieldTypeField,
  })
  @IsEnum(EnumUserFieldTypeField)
  @IsOptional()
  @Field(() => EnumUserFieldTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumUserFieldEntity,
  })
  @IsEnum(EnumUserFieldEntity)
  @IsOptional()
  @Field(() => EnumUserFieldEntity, {
    nullable: true,
  })
  entity?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { UserFieldUpdateInput as UserFieldUpdateInput };

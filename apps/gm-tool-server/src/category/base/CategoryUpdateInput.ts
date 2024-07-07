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
import { EnumCategoryContains } from "./EnumCategoryContains";
import { IsEnum, IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
class CategoryUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumCategoryContains,
  })
  @IsEnum(EnumCategoryContains)
  @IsOptional()
  @Field(() => EnumCategoryContains, {
    nullable: true,
  })
  contains?: "Option1" | null;

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

export { CategoryUpdateInput as CategoryUpdateInput };

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CampaignWhereInput } from "./CampaignWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CampaignCountArgs {
  @ApiProperty({
    required: false,
    type: () => CampaignWhereInput,
  })
  @Field(() => CampaignWhereInput, { nullable: true })
  @Type(() => CampaignWhereInput)
  where?: CampaignWhereInput;
}

export { CampaignCountArgs as CampaignCountArgs };
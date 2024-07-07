/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Stat } from "./Stat";
import { StatCountArgs } from "./StatCountArgs";
import { StatFindManyArgs } from "./StatFindManyArgs";
import { StatFindUniqueArgs } from "./StatFindUniqueArgs";
import { DeleteStatArgs } from "./DeleteStatArgs";
import { StatService } from "../stat.service";
@graphql.Resolver(() => Stat)
export class StatResolverBase {
  constructor(protected readonly service: StatService) {}

  async _statsMeta(
    @graphql.Args() args: StatCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Stat])
  async stats(@graphql.Args() args: StatFindManyArgs): Promise<Stat[]> {
    return this.service.stats(args);
  }

  @graphql.Query(() => Stat, { nullable: true })
  async stat(@graphql.Args() args: StatFindUniqueArgs): Promise<Stat | null> {
    const result = await this.service.stat(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Stat)
  async deleteStat(@graphql.Args() args: DeleteStatArgs): Promise<Stat | null> {
    try {
      return await this.service.deleteStat(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
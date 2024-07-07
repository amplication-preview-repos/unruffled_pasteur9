/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StatService } from "../stat.service";
import { StatCreateInput } from "./StatCreateInput";
import { Stat } from "./Stat";
import { StatFindManyArgs } from "./StatFindManyArgs";
import { StatWhereUniqueInput } from "./StatWhereUniqueInput";
import { StatUpdateInput } from "./StatUpdateInput";

export class StatControllerBase {
  constructor(protected readonly service: StatService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Stat })
  async createStat(@common.Body() data: StatCreateInput): Promise<Stat> {
    return await this.service.createStat({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Stat] })
  @ApiNestedQuery(StatFindManyArgs)
  async stats(@common.Req() request: Request): Promise<Stat[]> {
    const args = plainToClass(StatFindManyArgs, request.query);
    return this.service.stats({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Stat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async stat(
    @common.Param() params: StatWhereUniqueInput
  ): Promise<Stat | null> {
    const result = await this.service.stat({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Stat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStat(
    @common.Param() params: StatWhereUniqueInput,
    @common.Body() data: StatUpdateInput
  ): Promise<Stat | null> {
    try {
      return await this.service.updateStat({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Stat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStat(
    @common.Param() params: StatWhereUniqueInput
  ): Promise<Stat | null> {
    try {
      return await this.service.deleteStat({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

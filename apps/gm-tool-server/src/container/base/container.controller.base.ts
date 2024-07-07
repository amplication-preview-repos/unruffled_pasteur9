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
import { ContainerService } from "../container.service";
import { ContainerCreateInput } from "./ContainerCreateInput";
import { Container } from "./Container";
import { ContainerFindManyArgs } from "./ContainerFindManyArgs";
import { ContainerWhereUniqueInput } from "./ContainerWhereUniqueInput";
import { ContainerUpdateInput } from "./ContainerUpdateInput";

export class ContainerControllerBase {
  constructor(protected readonly service: ContainerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Container })
  async createContainer(
    @common.Body() data: ContainerCreateInput
  ): Promise<Container> {
    return await this.service.createContainer({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        typeField: true,
        parent: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Container] })
  @ApiNestedQuery(ContainerFindManyArgs)
  async containers(@common.Req() request: Request): Promise<Container[]> {
    const args = plainToClass(ContainerFindManyArgs, request.query);
    return this.service.containers({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        typeField: true,
        parent: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Container })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async container(
    @common.Param() params: ContainerWhereUniqueInput
  ): Promise<Container | null> {
    const result = await this.service.container({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        typeField: true,
        parent: true,
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
  @swagger.ApiOkResponse({ type: Container })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContainer(
    @common.Param() params: ContainerWhereUniqueInput,
    @common.Body() data: ContainerUpdateInput
  ): Promise<Container | null> {
    try {
      return await this.service.updateContainer({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          typeField: true,
          parent: true,
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
  @swagger.ApiOkResponse({ type: Container })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContainer(
    @common.Param() params: ContainerWhereUniqueInput
  ): Promise<Container | null> {
    try {
      return await this.service.deleteContainer({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          typeField: true,
          parent: true,
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
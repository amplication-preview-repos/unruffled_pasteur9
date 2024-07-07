import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PropertyGroupServiceBase } from "./base/propertyGroup.service.base";

@Injectable()
export class PropertyGroupService extends PropertyGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

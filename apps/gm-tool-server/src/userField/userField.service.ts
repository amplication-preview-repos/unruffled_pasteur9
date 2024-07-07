import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFieldServiceBase } from "./base/userField.service.base";

@Injectable()
export class UserFieldService extends UserFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

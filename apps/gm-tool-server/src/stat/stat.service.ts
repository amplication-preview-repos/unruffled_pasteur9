import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatServiceBase } from "./base/stat.service.base";

@Injectable()
export class StatService extends StatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

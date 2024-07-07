import { Module } from "@nestjs/common";
import { StatModuleBase } from "./base/stat.module.base";
import { StatService } from "./stat.service";
import { StatController } from "./stat.controller";
import { StatResolver } from "./stat.resolver";

@Module({
  imports: [StatModuleBase],
  controllers: [StatController],
  providers: [StatService, StatResolver],
  exports: [StatService],
})
export class StatModule {}

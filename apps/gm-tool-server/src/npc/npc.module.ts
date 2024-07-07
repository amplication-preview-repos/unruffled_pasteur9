import { Module } from "@nestjs/common";
import { NpcModuleBase } from "./base/npc.module.base";
import { NpcService } from "./npc.service";
import { NpcController } from "./npc.controller";
import { NpcResolver } from "./npc.resolver";

@Module({
  imports: [NpcModuleBase],
  controllers: [NpcController],
  providers: [NpcService, NpcResolver],
  exports: [NpcService],
})
export class NpcModule {}

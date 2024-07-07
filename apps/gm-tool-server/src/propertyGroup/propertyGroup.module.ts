import { Module } from "@nestjs/common";
import { PropertyGroupModuleBase } from "./base/propertyGroup.module.base";
import { PropertyGroupService } from "./propertyGroup.service";
import { PropertyGroupController } from "./propertyGroup.controller";
import { PropertyGroupResolver } from "./propertyGroup.resolver";

@Module({
  imports: [PropertyGroupModuleBase],
  controllers: [PropertyGroupController],
  providers: [PropertyGroupService, PropertyGroupResolver],
  exports: [PropertyGroupService],
})
export class PropertyGroupModule {}

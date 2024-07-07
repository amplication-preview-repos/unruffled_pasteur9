import { Module } from "@nestjs/common";
import { UserFieldModuleBase } from "./base/userField.module.base";
import { UserFieldService } from "./userField.service";
import { UserFieldController } from "./userField.controller";
import { UserFieldResolver } from "./userField.resolver";

@Module({
  imports: [UserFieldModuleBase],
  controllers: [UserFieldController],
  providers: [UserFieldService, UserFieldResolver],
  exports: [UserFieldService],
})
export class UserFieldModule {}

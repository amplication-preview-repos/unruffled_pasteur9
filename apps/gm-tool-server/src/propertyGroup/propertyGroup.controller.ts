import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PropertyGroupService } from "./propertyGroup.service";
import { PropertyGroupControllerBase } from "./base/propertyGroup.controller.base";

@swagger.ApiTags("propertyGroups")
@common.Controller("propertyGroups")
export class PropertyGroupController extends PropertyGroupControllerBase {
  constructor(protected readonly service: PropertyGroupService) {
    super(service);
  }
}

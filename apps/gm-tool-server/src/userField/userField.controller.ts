import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFieldService } from "./userField.service";
import { UserFieldControllerBase } from "./base/userField.controller.base";

@swagger.ApiTags("userFields")
@common.Controller("userFields")
export class UserFieldController extends UserFieldControllerBase {
  constructor(protected readonly service: UserFieldService) {
    super(service);
  }
}

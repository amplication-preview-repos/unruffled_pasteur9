import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatService } from "./stat.service";
import { StatControllerBase } from "./base/stat.controller.base";

@swagger.ApiTags("stats")
@common.Controller("stats")
export class StatController extends StatControllerBase {
  constructor(protected readonly service: StatService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { StatResolverBase } from "./base/stat.resolver.base";
import { Stat } from "./base/Stat";
import { StatService } from "./stat.service";

@graphql.Resolver(() => Stat)
export class StatResolver extends StatResolverBase {
  constructor(protected readonly service: StatService) {
    super(service);
  }
}

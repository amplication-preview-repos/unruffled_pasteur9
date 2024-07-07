import * as graphql from "@nestjs/graphql";
import { NpcResolverBase } from "./base/npc.resolver.base";
import { Npc } from "./base/Npc";
import { NpcService } from "./npc.service";

@graphql.Resolver(() => Npc)
export class NpcResolver extends NpcResolverBase {
  constructor(protected readonly service: NpcService) {
    super(service);
  }
}

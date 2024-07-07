import * as graphql from "@nestjs/graphql";
import { UserFieldResolverBase } from "./base/userField.resolver.base";
import { UserField } from "./base/UserField";
import { UserFieldService } from "./userField.service";

@graphql.Resolver(() => UserField)
export class UserFieldResolver extends UserFieldResolverBase {
  constructor(protected readonly service: UserFieldService) {
    super(service);
  }
}

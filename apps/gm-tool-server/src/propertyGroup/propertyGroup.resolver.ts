import * as graphql from "@nestjs/graphql";
import { PropertyGroupResolverBase } from "./base/propertyGroup.resolver.base";
import { PropertyGroup } from "./base/PropertyGroup";
import { PropertyGroupService } from "./propertyGroup.service";

@graphql.Resolver(() => PropertyGroup)
export class PropertyGroupResolver extends PropertyGroupResolverBase {
  constructor(protected readonly service: PropertyGroupService) {
    super(service);
  }
}

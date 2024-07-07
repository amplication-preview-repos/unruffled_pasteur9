import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContainerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  parent?: StringNullableFilter;
};

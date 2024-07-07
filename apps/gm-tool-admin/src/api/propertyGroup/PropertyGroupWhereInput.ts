import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PropertyGroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  parent?: "Option1";
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserFieldWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  entity?: "Option1";
  name?: StringNullableFilter;
};

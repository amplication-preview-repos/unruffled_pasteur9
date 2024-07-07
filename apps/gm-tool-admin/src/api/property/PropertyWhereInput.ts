import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: StringNullableFilter;
};

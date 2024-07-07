import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TemplateWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  entity?: "Option1";
  fields?: JsonFilter;
};

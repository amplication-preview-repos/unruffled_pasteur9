import { InputJsonValue } from "../../types";

export type TemplateCreateInput = {
  name?: string | null;
  entity?: "Option1" | null;
  fields?: InputJsonValue;
};

import { InputJsonValue } from "../../types";

export type TemplateUpdateInput = {
  name?: string | null;
  entity?: "Option1" | null;
  fields?: InputJsonValue;
};

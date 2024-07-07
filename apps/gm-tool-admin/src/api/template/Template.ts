import { JsonValue } from "type-fest";

export type Template = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  entity?: "Option1" | null;
  fields: JsonValue;
};

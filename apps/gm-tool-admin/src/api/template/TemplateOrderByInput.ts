import { SortOrder } from "../../util/SortOrder";

export type TemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  entity?: SortOrder;
  fields?: SortOrder;
};

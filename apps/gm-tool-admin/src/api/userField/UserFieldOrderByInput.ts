import { SortOrder } from "../../util/SortOrder";

export type UserFieldOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  entity?: SortOrder;
  name?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  contains?: SortOrder;
  name?: SortOrder;
};

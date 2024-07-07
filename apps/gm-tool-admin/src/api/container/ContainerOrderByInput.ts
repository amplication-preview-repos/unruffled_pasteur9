import { SortOrder } from "../../util/SortOrder";

export type ContainerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  parent?: SortOrder;
};

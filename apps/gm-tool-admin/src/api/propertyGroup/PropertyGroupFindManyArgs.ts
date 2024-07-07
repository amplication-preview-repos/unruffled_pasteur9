import { PropertyGroupWhereInput } from "./PropertyGroupWhereInput";
import { PropertyGroupOrderByInput } from "./PropertyGroupOrderByInput";

export type PropertyGroupFindManyArgs = {
  where?: PropertyGroupWhereInput;
  orderBy?: Array<PropertyGroupOrderByInput>;
  skip?: number;
  take?: number;
};

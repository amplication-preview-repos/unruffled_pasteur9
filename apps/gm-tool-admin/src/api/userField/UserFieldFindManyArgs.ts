import { UserFieldWhereInput } from "./UserFieldWhereInput";
import { UserFieldOrderByInput } from "./UserFieldOrderByInput";

export type UserFieldFindManyArgs = {
  where?: UserFieldWhereInput;
  orderBy?: Array<UserFieldOrderByInput>;
  skip?: number;
  take?: number;
};

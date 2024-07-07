import { StatWhereInput } from "./StatWhereInput";
import { StatOrderByInput } from "./StatOrderByInput";

export type StatFindManyArgs = {
  where?: StatWhereInput;
  orderBy?: Array<StatOrderByInput>;
  skip?: number;
  take?: number;
};

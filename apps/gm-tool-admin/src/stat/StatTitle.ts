import { Stat as TStat } from "../api/stat/Stat";

export const STAT_TITLE_FIELD = "id";

export const StatTitle = (record: TStat): string => {
  return record.id?.toString() || String(record.id);
};

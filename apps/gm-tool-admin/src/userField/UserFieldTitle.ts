import { UserField as TUserField } from "../api/userField/UserField";

export const USERFIELD_TITLE_FIELD = "name";

export const UserFieldTitle = (record: TUserField): string => {
  return record.name?.toString() || String(record.id);
};

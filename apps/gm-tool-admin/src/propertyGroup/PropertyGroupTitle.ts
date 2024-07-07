import { PropertyGroup as TPropertyGroup } from "../api/propertyGroup/PropertyGroup";

export const PROPERTYGROUP_TITLE_FIELD = "name";

export const PropertyGroupTitle = (record: TPropertyGroup): string => {
  return record.name?.toString() || String(record.id);
};

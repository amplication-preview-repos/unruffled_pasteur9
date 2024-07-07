import { Container as TContainer } from "../api/container/Container";

export const CONTAINER_TITLE_FIELD = "name";

export const ContainerTitle = (record: TContainer): string => {
  return record.name?.toString() || String(record.id);
};

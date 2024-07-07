export type Container = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField?: "Option1" | null;
  parent: string | null;
};

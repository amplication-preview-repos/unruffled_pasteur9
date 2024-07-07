export type PropertyGroup = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  parent?: "Option1" | null;
};

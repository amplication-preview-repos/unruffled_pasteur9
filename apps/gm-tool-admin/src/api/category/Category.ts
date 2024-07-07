export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contains?: "Option1" | null;
  name: string | null;
};

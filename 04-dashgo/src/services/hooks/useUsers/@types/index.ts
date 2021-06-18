export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type GetUserResponse = {
  totalCount: number;
  users: User[];
};

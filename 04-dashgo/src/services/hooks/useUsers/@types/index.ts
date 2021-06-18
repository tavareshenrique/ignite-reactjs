/* eslint-disable camelcase */

export type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

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

import { useQuery, UseQueryResult } from 'react-query';

import api from 'services/api';

import { UsersAPI } from './@interfaces';
import { User } from './@types';

export async function getUsers(): Promise<User[]> {
  const response = await api.get<UsersAPI>('users');

  const users = response.data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.name,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    } as User;
  });

  return users;
}

export function useUser(): UseQueryResult<User[]> {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  });
}

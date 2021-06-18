import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import api from 'services/api';

import { UsersAPI } from './@interfaces';
import { User, GetUserResponse } from './@types';

export async function getUsers(page: number): Promise<GetUserResponse> {
  const response = await api.get<UsersAPI>('users', {
    params: {
      page,
    },
  });

  const totalCount = Number(response.headers['x-total-count']);

  const users = response.data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    } as User;
  });

  return {
    users,
    totalCount,
  };
}

export function useUser(
  page: number,
  options?: UseQueryOptions,
): UseQueryResult<GetUserResponse, unknown> {
  const users = useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  }) as UseQueryResult<GetUserResponse, unknown>;

  return users;
}

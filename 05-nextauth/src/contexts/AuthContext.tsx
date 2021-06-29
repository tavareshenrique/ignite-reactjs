import { createContext, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies'

import { api } from '../services/api';

type User = {
  email: string;
  permissions: string[];
  roles: string[];
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', { email, password });

      const { token, refreshToken, permissions, roles } = response.data;

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 25 * 30, // 30 days
        path: '/'
      });
      setCookie(undefined, 'nextauth.refreshToken', refreshToken);

      setUser({
        email,
        permissions,
        roles
      })

      router.push('/dashboard');
    } catch (err) {
      console.log('err', err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user, isAuthenticated }} >
      {children}
    </AuthContext.Provider>
  )
}
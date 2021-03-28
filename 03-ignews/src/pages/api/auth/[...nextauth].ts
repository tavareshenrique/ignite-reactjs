import { query as q } from 'faunadb';

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { fauna } from '../../../services/fauna';

export interface ISession {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
  activeSubscription?: {
    ref: {
      '@ref': {
        id: string;
        collection: {
          '@ref': {
            id: string;
            collection: { '@ref': { id: string } };
          };
        };
      };
    };
    data: {
      id: string;
      userId: {
        '@ref': {
          id: string;
          collection: {
            '@ref': {
              id: string;
              collection: { '@ref': { id: string } };
            };
          };
        };
      };
      status: string;
      // eslint-disable-next-line camelcase
      price_id: string;
    };
  };
}

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user',
    }),
  ],
  callbacks: {
    async session(session) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email),
                    ),
                  ),
                ),
              ),
              q.Match(q.Index('subscription_by_status'), 'active'),
            ]),
          ),
        );

        return {
          ...session,
          activeSubscription: userActiveSubscription,
        };
      } catch {
        return {
          ...session,
          activeSubscription: null,
        };
      }
    },
    async signIn(user, _, __) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email)),
              ),
            ),
            q.Create(q.Collection('users'), { data: { email } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email))),
          ),
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});

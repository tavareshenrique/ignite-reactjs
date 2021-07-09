import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import api from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { ISession } from '../../pages/api/auth/[...nextauth]';

import styles from './styles.module.scss';

export function SubscribeButton() {
  3;

  const [session] = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    const nextSession = session as ISession;

    if (!nextSession) {
      signIn('github');
      return;
    }

    if (nextSession.activeSubscription) {
      router.push('/posts');
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}

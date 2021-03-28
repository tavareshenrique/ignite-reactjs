import { signin, useSession } from 'next-auth/client';

import api from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import { ISubscribeButtonProps } from './@interfaces';

import styles from './styles.module.scss';

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  3;

  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signin('github');
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

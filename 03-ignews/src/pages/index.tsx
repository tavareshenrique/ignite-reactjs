import { GetStaticProps } from 'next';
import Head from 'next/head';

import { stripe } from '../services/stripe';

import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

interface IHomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            <img
              src="/images/react.gif"
              alt="React Logo Animated"
              height={32}
              width={32}
            />{' '}
            Hey, welcome
          </span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all he publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(process.env.STRIPE_API_PRICE_KEY);

  /**
   * If u need more detail about the product data use:
   *
   * { expand: ["product"] }
   */

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

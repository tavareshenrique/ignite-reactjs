import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';

import { stripe } from '../../services/stripe';
import Home, { getStaticProps } from '../../pages';

jest.mock('next/router');
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false],
  };
});
jest.mock('../../services/stripe');

describe('Home page', () => {
  it('renders correctly', async () => {
    render(<Home product={{ priceId: 'fake-price-id', amount: 'R$ 10,00' }} />);

    expect(screen.getByText(/R\$ 10,00/i)).toBeInTheDocument();
  });

  it('loads initial data', async () => {
    const retriveStripePriceMocked = mocked(stripe.prices.retrieve);

    retriveStripePriceMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00',
          },
        },
      }),
    );
  });
});

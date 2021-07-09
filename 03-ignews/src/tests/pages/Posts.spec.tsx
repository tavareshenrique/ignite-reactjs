import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';

import { getPrismicClient } from '../../services/prismic';
import Posts, { getStaticProps } from '../../pages/posts';

const posts = [
  {
    slug: 'my-new-post',
    title: 'My New Post',
    excerpt: 'Post Exerpt',
    updatedAt: 'July 09',
  },
];

jest.mock('../../services/prismic');

describe('Posts page', () => {
  it('renders correctly', async () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText('My New Post')).toBeInTheDocument();
  });

  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'my-new-post',
            data: {
              title: [
                {
                  type: 'heading',
                  text: 'My New Post',
                },
              ],
              content: [
                {
                  type: 'paragraph',
                  text: 'Post Exerpt',
                },
              ],
            },
            last_publication_date: '07-09-2021',
          },
        ],
      }),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: 'my-new-post',
              title: 'My New Post',
              excerpt: 'Post Exerpt',
              updatedAt: '09 de julho de 2021',
            },
          ],
        },
      }),
    );
  });
});

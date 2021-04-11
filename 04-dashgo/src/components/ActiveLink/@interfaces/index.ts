import { LinkProps } from 'next/link';

import { ReactElement } from 'react';

export interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

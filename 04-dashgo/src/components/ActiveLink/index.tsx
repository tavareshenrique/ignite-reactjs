import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { cloneElement } from 'react';

import { IActiveLinkProps } from './@interfaces';

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...rest
}: IActiveLinkProps): JSX.Element {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.href)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
}

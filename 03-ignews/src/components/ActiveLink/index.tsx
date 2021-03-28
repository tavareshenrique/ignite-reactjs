import { cloneElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IActiveLinkProps } from './@interfaces';

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: IActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}

import { ElementType } from 'react';
import { LinkProps } from '@chakra-ui/react';

export interface INavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

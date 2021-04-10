import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/dist/client/router';

import { useDisclosure } from '@chakra-ui/hooks';
import { UseDisclosureReturn } from '@chakra-ui/react';

type SidebarDrawerContectData = UseDisclosureReturn;

interface ISidebarDrawerProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContectData);

export function SidebarDrawerProvider({
  children,
}: ISidebarDrawerProps): JSX.Element {
  const disclosure = useDisclosure();
  const router = useRouter();

  const [urlRouter, setUrlRouter] = useState(router.asPath);

  useEffect(() => {
    if (urlRouter !== router.asPath) {
      disclosure.onClose();
      setUrlRouter(router.asPath);
    }
  }, [disclosure, router.asPath, urlRouter]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = (): SidebarDrawerContectData =>
  useContext(SidebarDrawerContext);

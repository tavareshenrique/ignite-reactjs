import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { makeServer } from 'services/mirage';

import { SidebarDrawerProvider } from 'contexts/SidebarDrawerContext';

import { theme } from 'styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;

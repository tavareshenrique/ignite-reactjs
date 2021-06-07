import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { makeServer } from 'services/mirage';

import { SidebarDrawerProvider } from 'contexts/SidebarDrawerContext';

import { theme } from 'styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

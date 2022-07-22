import React from 'react';
import '../styles/globals.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Layout } from '../components';
import { ContextWrapper } from '../context/AppContext';
import { Toaster } from 'react-hot-toast';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ContextWrapper>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </ContextWrapper>
    </ChakraProvider>
  )
}

export default MyApp;

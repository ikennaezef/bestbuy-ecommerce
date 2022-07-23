import React from 'react';

import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='keywords' content='ecommerce, web store, web shop, online shopping, online sales' />
        <meta name='description' content='Buy your electronic products from BestBuy Web Shop' />
        <title>BestBuy Web Store</title>

        {/* <!-- ### Manifest and icons ### -->
	  <!-- General --> */}
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="BestBuy Web Store" />

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />


        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="mask-icon" href="/images/favicon-16x16.png" color="grey"></link>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
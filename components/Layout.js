import React from 'react';

import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BestBuy Web Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
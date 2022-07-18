import Head from 'next/head';
import {NavBar} from './NavBar';
import {Footer} from './Footer';

import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>BestBuy Web Store</title>
      </Head>
      <header>
        <NavBar/>
      </header>
      <main>
        SAMPOLE
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
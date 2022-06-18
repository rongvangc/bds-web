import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ title = 'BDS app', children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div>{children}</div>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;

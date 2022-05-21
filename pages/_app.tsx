import '../styles/globals.css';
import '../styles/product.css';
import '../styles/post.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

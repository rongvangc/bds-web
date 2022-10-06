import '../styles/globals.css';
import '../styles/product.css';
import '../styles/post.css';
import '../styles/detail.css';
import '../styles/table.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import type { AppProps } from 'next/app';
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCommonStore } from '@/stores';
import dynamic from 'next/dynamic';

const Loading = dynamic(() => import('@/components/Elements/Loading'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { loading, onLoading } = useCommonStore();

  useEffect(() => {
    router.events.on('routeChangeStart', () => onLoading(true));
    router.events.on('routeChangeComplete', () => onLoading(false));

    return () => {
      router.events.off('routeChangeStart', () => onLoading(true));
      router.events.off('routeChangeComplete', () => onLoading(false));
    };
  }, [onLoading, router.events]);

  return (
    <Fragment>
      <Loading loading={loading} isFull showLogo />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

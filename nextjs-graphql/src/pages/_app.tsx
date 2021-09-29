import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#f9f506"
        startPosition={0.2}
        stopDelayMs={200}
        height={1}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;

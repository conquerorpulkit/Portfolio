import "styles/index.scss";

import { Layout } from "components";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';

import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="keywords" content="Pulkit Gupta" />
        <meta name="keywords" content="pulkit gupta" />
        <meta name="keywords" content="portfolio" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>

    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

import type { AppProps } from "next/app";
import Head from 'next/head';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Side Palette｜デザイン・イラスト会社</title>
        <meta name="description" content="テンプレートのデザインではなく、お客様「一人一人に寄り添ったデザイン」をお届けします。" />
        <link rel="icon" href="/side-palette.ico" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={{ mouseY: 0 }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

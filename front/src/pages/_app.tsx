import type { AppProps } from "next/app";
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ mouseY: 0 }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

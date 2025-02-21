import '../styles/globals.css'; // グローバルCSSのインポート
import type { AppProps } from "next/app";
import Header from '../components/parts/Header';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

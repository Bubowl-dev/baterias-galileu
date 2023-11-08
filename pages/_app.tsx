import { AppProps } from "next/app";
import Head from "next/head";

import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import AppProvider from "@/context";

import "../src/styles/reset.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.bateriasgalileu.com.br/`}
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </>
  );
};

export default App;

import "@/styles/globals.css";
import { MyContextProvider } from "@/Context/MyContext";
import { AppProps } from "next/app"; // Import the AppProps type from next/app
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  // Use the AppProps type for Component and pageProps
  return (
    <MyContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default App;

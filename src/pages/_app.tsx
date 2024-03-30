import "@/styles/globals.css";
import { MyContextProvider } from "@/Context/MyContext";
import { AppProps } from "next/app"; // Import the AppProps type from next/app

function App({ Component, pageProps }: AppProps) {
  // Use the AppProps type for Component and pageProps
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default App;

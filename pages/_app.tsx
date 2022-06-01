import "../styles/globals.css";
import type {AppProps} from "next/app";

import {Provider} from "react-redux";

import {store} from "../src/redux/store";
import Navbar from "../src/components/navbar";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <div className="container max-w-7xl text-center justify-center">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../src/redux/store'
import Navbar from '../src/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="container text-center justify-center">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp

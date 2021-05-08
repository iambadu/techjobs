import {AppProps} from 'next/app'

import '../scss/globals.css';

const Application = ({ Component, pageProps }:AppProps) => {
  return (
      <Component {...pageProps} />
  )
}
export default Application;
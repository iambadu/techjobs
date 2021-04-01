import '../scss/globals.css';
import Pagewrap from './components/_pagewrap';
import { SearchWrap } from './components/context'



export default function Application({ Component, pageProps }) {
  return (
      <Pagewrap>
        <Component {...pageProps} />
      </Pagewrap>


  )
}

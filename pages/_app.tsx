import { GlobalStyle } from '../styles/global'
// import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp

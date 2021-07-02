import GlobalStyles from '../styles/global/global'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Olá</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

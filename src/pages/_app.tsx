import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Olá</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

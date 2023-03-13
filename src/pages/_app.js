import Head  from 'next/head';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon/favicon-16x16.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

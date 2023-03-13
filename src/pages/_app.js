import Head from 'next/head';
import '@/styles/globals.css'
import { StateProvider } from '@/Redux/StateProvider';
import reducer from '@/Redux/reducer';
import { initialState } from '@/Redux/initiaState';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon/favicon-16x16.png' />
      </Head>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </>
  )
}

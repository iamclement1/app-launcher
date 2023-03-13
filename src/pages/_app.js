import Head from 'next/head';
import '@/styles/globals.css'
import { StateProvider } from '@/Redux/StateProvider';
import reducer from '@/Redux/reducer';
import { initialState } from '@/Redux/initiaState';
import { useEffect, useState } from 'react';
import { Loader } from '@/components';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const handleRouteChange = (url) => {
      setIsLoading(true);
    }
    const handleRouteChangeComplete = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon/favicon.io' />
      </Head>
      {
        isLoading ? <Loader /> : <>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Component {...pageProps} />
          </StateProvider>
        </>
      }
    </>
  )
}

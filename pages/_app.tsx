import type { AppProps } from 'next/app'
import { Global, globalStyles } from '@/styles'
import '@/icons'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

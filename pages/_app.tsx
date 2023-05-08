import type { AppProps } from 'next/app'
import { Global, globalStyles } from '@/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

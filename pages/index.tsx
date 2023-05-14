import Head from 'next/head'
import * as Views from '@/views'

export default function Home() {
  return (
    <>
      <Head>
        <title>Digisolve - The Digital Agency for Winners</title>
        <meta name='author' content='Esteban V.M.' />
        <meta name='copyright' content='Esteban V.M.' />
        <meta name='description' content='Your digital agency. Click the link above to enter 🖱️' />
        <meta name='keywords' content='digital agency, online business' />
        <meta name='robots' content='index' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/img/digisolve-logo.png' type='image/png' />
      </Head>
      <main>
        <Views.Header />
        <Views.About />
        <Views.Portfolio />
        <Views.Services />
        <Views.Partners />
        <Views.Testimonials />
        <Views.Packages />
        <Views.Contact />
        <Views.Footer />
      </main>
    </>
  )
}

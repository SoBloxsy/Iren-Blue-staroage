import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Iren Blue.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="We're not just ready yet!" />
        <p className="description">
          but we will be #soon</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

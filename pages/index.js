import Head from 'next/head'
import Header from '@components/Header'
import Form from '@components/Form'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div className="center-content">
              <Header />
            <div className="circle-container">
              <img className="circle" src='/circle2.png' alt="A circle"/>
            </div>
            <h2 className="eyebrow">Calls and Texts</h2>
            <h3>Siri lets you stay connected without lifting a finger.</h3>
              <p>Siri can make calls or send texts for you whether you are driving, have your hands full, or are simply on the go.1 It can even announce your messages on your AirPods.2 It also offers proactive suggestions — like texting someone that you’re running late for a meeting — so you can stay in touch effortlessly.3</p>
          </div>
          <Form />
      </main>

    </div>
  )
}

import Head from 'next/head'

import styles from './index.module.scss'

export default function Home () {
  return (
    <>
      <Head>
        <title>doamatto</title>
      </Head>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Hi!<br/> I'm Matt Ronchetto.
          </h1>
          <img src="/assets/photo.jpeg" alt="Photo of Matt Ronchetto" width="320" height="320"/>
        </div>
      </main>
    </>
  )
}

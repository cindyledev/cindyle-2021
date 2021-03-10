import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cindy Le</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Cindy Le's Website
        </h1>

        <p className={styles.description}>
          Thanks for stopping by
        </p>
      </main>

    </div>
  )
}

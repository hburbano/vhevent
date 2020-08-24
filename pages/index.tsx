import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { EventCard } from './components'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Event Page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <EventCard />
      <EventCard />
      <EventCard />
    </main>

    <footer className={styles.footer}>
      <a
        href="https://github.com/hburbano/vhevent"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code at Github
        <img src="/github.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
)

export default Home

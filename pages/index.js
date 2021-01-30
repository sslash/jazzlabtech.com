import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jazzlab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://jazzlabtech.com">Jazzlab! 👋</a>
        </h1>

        <p className={styles.description}>
          An indie app development studio, based in Oslo, Norway 🇳🇴
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Specializations</h3>
            <p>React Native, SwiftUI, UiKit, Node.js and Postgresql</p>
          </a>

          <a href="mailto:michael@jazzlabtech.com" className={styles.card}>
            <h3>Reach out &rarr;</h3>
            <p>Reach out for business enqueries. Or anything else!</p>
          </a>

         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <footer className={styles.footer}>
        <p>Made with ✌️ and ❤️</p>
      </footer>
        </a>
      </footer>

     
    </div>
  )
}

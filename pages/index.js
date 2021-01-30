import styles from '../styles/Home.module.css'
import Page from '../molecules/Page'

export default function Home() {
  return (
    <Page>
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
     </Page>
  )
}

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Section2 from "../sections/section2";
import Section3 from "../sections/section3";
import Section4 from "../sections/section4";
import { FaFacebook, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SenseSpeech</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navLogo}>SENSESPEECH</div>
      </nav>

      <main className={styles.main}>
        <section className={styles.jumbo}>
          <div className={styles.jumboMain}>
            <h1 className={styles.heading1}>ASR Reinvented</h1>
            <div className={styles.description}>
              The fastest, most accurate, most reliable, most scalable speech transcription, with understanding —
              rebuilt just for enterprise. Our solution provides a seamless human-like conversational experience for
              self-service across all channels.
            </div>
            <div className={styles.button}>Learn More</div>
          </div>
        </section>

        <section className={styles.section2}>
          <Section2 />
        </section>
        <section className={styles.section3}>
          <Section3 />
        </section>
        <section className={styles.section4}>
          <Section4 />
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footertop}>
          Made with love by <a href="https://intelsense.ai/">INTELSENSE AI</a>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <a href="https://www.facebook.com/intelsenseai">
              <FaFacebook />
            </a>
          </div>
          <div className={styles.link}>
            <a href="https://www.linkedin.com/company/intelsenseai/">
              <FaLinkedin />
            </a>
          </div>
          <div className={styles.link}>
            <a href="https://intelsense.ai/">
              <FaGlobe />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

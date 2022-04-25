import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shoe Shop</title>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/icons8-shoes-32.png"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Shoe Shop
        </h1>

        <div className={styles.grid}>
          <a href="/products/products" className={styles.card}>
            <h2>See Our Product &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Design By Power
        </p>
      </footer>
    </div>
  )
}

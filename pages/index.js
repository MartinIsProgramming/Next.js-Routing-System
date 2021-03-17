import Head from 'next/head';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Main domain</h2>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default HomePage;

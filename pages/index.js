import Head from "next/head";
import BasicLayout from "../layouts/BasicLayout";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <BasicLayout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    </BasicLayout>
  );
};

export default Home;

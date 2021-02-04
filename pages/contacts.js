import BasicLayout from "../layouts/BasicLayout";

const contacts = () => {
  return (
    <BasicLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Contacts <a href="https://nextjs.org">Page</a>
          </h1>
        </main>
      </div>
    </BasicLayout>
  );
};

export default contacts;

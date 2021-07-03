import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Counter: ${0}`}</h1>
      <button className={styles.counterBtn}>Increment Counter</button>
    </div>
  )
};

export default Home;

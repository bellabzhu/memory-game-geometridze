import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.item}>Design and development by Bella Bzhukova. Images by Freepik</p>
      <p className={styles.year}>💚 {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
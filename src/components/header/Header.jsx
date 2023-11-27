import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/' className={styles.logolink}><img src='./logo.png' alt='Logo' /></Link>
        <p className={styles.username}>Hello, <span className={styles.underline}>friend</span> !</p>
      </div>
    </header>
  )
};

export default Header;

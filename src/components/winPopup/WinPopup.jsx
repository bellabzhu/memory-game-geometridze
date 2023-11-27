import styles from './WinPopup.module.css';

const WinPopup = ({ setIsModalOpened }) => {

  function closeByOverlay (e) {
    if (e.target === e.currentTarget) {
      setIsModalOpened(false);
    }
  }

  const closeModal = () => {
    setIsModalOpened(false);
  }

  return(
    <div className={styles.bg} onClick={closeByOverlay}>
      <div className={styles.container}>
        <h2>You won!</h2>
        <p className={styles.admire}>We are impressed by your abilities! Keep going!</p>
        <button className={styles.close} onClick={closeModal} type="button" aria-label="Close popup">OK</button>
      </div>
    </div>
  )
};

export default WinPopup;
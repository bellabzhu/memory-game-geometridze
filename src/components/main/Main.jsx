import styles from './Main.module.css';
import Header from '../header/Header';
import Gameboard from '../gameboard/Gameboard';
import WinPopup from '../winPopup/WinPopup';
import { useState } from 'react';

const Main = ({ cardImages, onLogout }) => {

  const [isModalOpened, setIsModalOpened] = useState(false);

  return(
    <div className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.subheadContainer}>
        <p className={styles.sunhead}>In the large Geometridze family, there are many twins. Click on the cards and find them all.</p>
        <p className={styles.sunhead}>The fewer moves you take, the cooler you are! 🧡</p>
      </div>
      <Gameboard cardImages={cardImages} setIsModalOpened={setIsModalOpened} />
      {isModalOpened && <WinPopup setIsModalOpened={setIsModalOpened} />}
    </div>
  )
};

export default Main;
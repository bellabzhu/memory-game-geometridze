import styles from './Card.module.css';

const Card = ({ card, handleChoice, flipped, disabled }) => {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return(
    <div className={`${styles.card} ${flipped ? styles.flipped : ""}`} >
        <div className={styles.back} onClick={handleClick} />
        <img className={styles.front} src={card.src} alt="Abstract cute illustration" />
    </div>
  )
};

export default Card;
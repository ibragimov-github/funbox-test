import React from 'react';
import styles from './CardDescription.module.scss';

function CardDescription({state, changeState, description}) {
  if (state === 'inactive') {
    return(
      <span className={styles.text}>Чего Сидишь? Порадуй котэ, <span onClick={changeState} className={styles.blue}>купи</span></span>
    )
  }
  if (state === 'active') {
    return (
      <span className={styles.text}>{description}</span>
    )
  }
}

export default CardDescription
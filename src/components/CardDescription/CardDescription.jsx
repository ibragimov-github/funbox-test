import React from 'react';
import styles from './CardDescription.module.scss';

function CardDescription({state, description, changeCardFunc, filling}) {
  if (state === 'inactive') {
    return (
      <span className={styles.text}>
        Чего сидишь? Порадуй котэ, <span onClick={changeCardFunc} className={styles.blue}>купи</span>
      </span>
    )
  }
  if (state === 'active') {
    return(
      <span className={styles.text}>{description}</span>
    )
  }
  if (state === 'disabled') {
    return (
      <span className={styles['disabled-text']}>Печалька, с {filling} закончился</span>
    )
  }
}

export default CardDescription
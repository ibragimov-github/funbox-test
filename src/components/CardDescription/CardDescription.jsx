import React from 'react';
import styles from './CardDescription.module.scss';

function CardDescription({state, description, changeCardFunc}) {
  if (state === 'inactive') {
    return (
      <span className={styles.text}>
        Чего сидишь? Порадуй котэ, <span className={styles.blue}>купи</span>
      </span>
    )
  }
  if (state === 'active') {
    return(
      <span className={styles.text}>{description}</span>
    )
  }
}

export default CardDescription
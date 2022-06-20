import React, { useState } from 'react';
import CardDescription from '../CardDescription/CardDescription';
import styles from './Card.module.scss';

function Card({state, description, filling, count, give, weight, id}) {
  const [cardState, setCardState] = useState(state);
  const [cardHover, setCardHover] = useState('');
  const [cardText, setCardText] = useState('');
  const changeState = () => {
    if(cardState === 'inactive') {
      setCardState('active');
    }
    if (cardState === 'active') {
      setCardState('inactive');
      setCardText('')
      setCardHover('')
    }
  }
  const msFunc = () => {
    if(cardState === 'active' && cardText === '') {
      setCardHover('show')
    }
    setCardText('')
  }
  const hoverFunc = () => {
    if (cardHover === 'show') {
      setCardText('show')
    }

  }
  return (
    <div id={styles[`${id}`]} className={styles.container}>
      <div className={styles['card-container']}>
        <div onMouseOver={hoverFunc} onMouseLeave={msFunc} onClick={changeState}  className={`${styles['card-border']} ${styles[`${cardState}`]}`}>
          <div className={styles.card}>
            <div className={`${styles['card-text']} ${styles[`${cardText}`]}`}>
              <span className={styles['text-disable']}>Сказочное заморское яство</span>
              <span className={styles['text-show']}>
                Котэ не одобряет ?
              </span>
              <h2>Нямушка</h2>
              <h3>с {filling}</h3>
              <span>{count}</span>
              <span>{give}</span>
            </div>
            <div className={styles.weight}>
              <span>{weight}</span>
              <span>КГ</span>
            </div>
          </div>
        </div>
        <CardDescription 
          changeCardFunc={changeState} 
          description={description} 
          state={cardState}
          filling={filling}
        />
      </div>
    </div>
  )
}

export default Card
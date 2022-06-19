import React, { useState } from 'react'
import CardDescription from '../CardDescription/CardDescription'
import styles from './Card.module.scss'

function Card({id, state, description, info}) {
  const [cardState, setCardState] = useState(state)
  const changeCardState = () => {
    if (cardState === 'inactive') {setCardState('active')}
    if (cardState === 'active') {setCardState('inactive')}
  }
  return (
    <div id={styles[`${id}`]} className={`${styles.card} ${styles[`${cardState}`]}`}>
      <div onClick={changeCardState} className={styles['card-image']}></div>
      <CardDescription fiiling={info.fiiling} description={description} state={cardState} changeState={changeCardState}/>
    </div>
  )
}

export default Card
import React from 'react'
import styles from './App.module.scss'
import Card from '../Card/Card'

function App() {
  return (
    <div className={styles.container}>
      <h1>Ты сегодня покормил кота?</h1>
      <div className={styles.grid}>
        <Card 
          id='grid1'
          state='inactive' 
          description='Печень утки разварная с артишоками'
          filling='фуа-гра'
          count='10 порций'
          give='мышь в подарок'
          weight='0.5'
        />
        <Card 
          state='inactive' 
          description='Головы щучьи с чесноком да свежайшая сёмгушка'
          filling='рыбой'
          count='40 порций'
          give='2 мыши в подарок'
          weight='2'
        />
        <Card 
          state='disabled' 
          description='Филе из цыплят с трюфелями в бульоне'
          filling='курой'
          count='100 порций'
          give='5 мышей в подарок заказчик доволен'
          weight='5'
        />
      </div>
    </div>
  )
}

export default App
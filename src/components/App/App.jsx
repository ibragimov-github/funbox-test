import React from 'react';
import Card from '../Card/Card';
import styles from './App.module.scss';


function App() {
  const cardInfo = [{
    filling: 'фуа-гра',
    count: '10 порций',
    gived: 'мышь в подарок',
    weight: '0,5'
  }, {
    filling: 'рыбой',
    count: '40 порций', 
    gived: '2 мыши в подарок', 
    weight: '2'
  }, {
    filling: 'курой',
    count: '100 порций',
    gived: '5 мышей в подарок заказчик доволен',
    weight: '5'
  }]
  return (
    <div className={styles.container}>
      <h1>Ты сегодня покормил кота?</h1>
      <div className={styles.grid}>
        <Card info={cardInfo[0]} description='Печень утки разварная с артишоками' 
        state='inactive' id='grid1'/>
        <Card info={cardInfo[1]} description='Головы щучьи с чесноком да свежайшая сёмгушка' 
        state='inactive'/>
        <Card info={cardInfo[2]} description='Филе из цыплят с трюфелями в бульоне' state='inactive'/>
      </div>
    </div>
  )
}

export default App
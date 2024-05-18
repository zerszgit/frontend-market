import React from 'react';
import Park from '../../img/park.png';
import styles  from "./style.module.css";
import Header from '../header/Header'

export const Home = () => {
  return (
    <div className={styles['home']}>
   <Header/>
      <div className={styles["home-right"]}>
        <img src={Park} alt="park" className={styles['home-park']} />
      </div>
    </div>
  )
}

export default Home

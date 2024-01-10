import React from 'react';
import { useState } from 'react';

import styles from './TicTacToe.module.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

export const TicTacToe = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>TicTacToe - Built In <span className={styles.title__highlight}>React.js</span></h1>
        <div className={styles.board}>
            <div className={styles.row}>
            </div>
        </div>
        <button className={styles.reset}>Reset</button>
    </div>
  )
}

export default TicTacToe;

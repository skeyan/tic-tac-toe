import React from 'react';
import { useState } from 'react';
import styles from './TicTacToe.module.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
import Board from './Board';

export const TicTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill('X'));

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>TicTacToe - Built In React.js</h1>
            <Board tiles={tiles}/>
            <button className={styles.reset}>Reset</button>
        </div>
    )
}

export default TicTacToe;

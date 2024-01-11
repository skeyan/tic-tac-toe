import React from 'react';
import { useState } from 'react';
import styles from './TicTacToe.module.css';
import { PLAYER_O, PLAYER_X } from '../../Utils/constants';
import Board from './Board';

/**
 * A simple TicTacToe game component with the standard board and conditions.
 * @returns A TicTacToe game component, ready to use
 */
export const TicTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

    const handleTileClick = (clickedTileIndex) => {
        // Do not allow clicks on already filled tiles
        if (tiles[clickedTileIndex] !== null) {
            return;
        }

        // Update tiles
        const updatedTiles = [...tiles];
        updatedTiles[clickedTileIndex] = playerTurn;
        setTiles(updatedTiles);

        switchPlayerTurn();
    }

    const switchPlayerTurn = () => {
        if (playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        } else if (playerTurn === PLAYER_O) {
            setPlayerTurn(PLAYER_X);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>TicTacToe - Built In React.js</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
            <button className={styles.reset}>Reset</button>
        </div>
    )
}

export default TicTacToe;

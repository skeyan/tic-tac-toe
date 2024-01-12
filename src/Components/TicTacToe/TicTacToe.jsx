import React from 'react';
import { useState } from 'react';
import styles from './TicTacToe.module.css';
import { PLAYER_O, PLAYER_X } from '../../Utils/constants';
import Board from './Board';

/**
 * A simple TicTacToe game component with the standard board and conditions.
 * It represents the game.
 * @returns A TicTacToe game component, ready to use
 */
export const TicTacToe = () => {
    /**
     * @property {Array} tiles An array representing the tiles of the game.
     */
    const [tiles, setTiles] = useState(Array(9).fill(null));
    /**
     * @property {String} playerTurn A string representing the player whose turn it is.
     */
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    /**
     * @property {String} winner The player who has won the current game.
     */
    const [winner, setWinner] = useState(null);
    /**
     * @property {String} winCombo The combination the won the current game.
     */
    const [winCombo, setWinCombo] = useState([]);

    /**
     * Callback function for when a tile is clicked.
     * @param {int} clickedTileIndex The identifier for which tile was clicked
     * @returns void
     */
    const handleTileClick = (clickedTileIndex) => {
        // Do not allow clicks on already filled tiles
        // And do not allow clicks when the game has been won
        if (tiles[clickedTileIndex] || winner) {
            return;
        }

        // Update tiles
        const updatedTiles = [...tiles];
        updatedTiles[clickedTileIndex] = playerTurn;
        setTiles(updatedTiles);
        checkWinStatus(updatedTiles);
        switchPlayerTurn();
    }

    /**
     * A function to help swap player turns.
     * @returns void
     */
    const switchPlayerTurn = () => {
        if (playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        } else if (playerTurn === PLAYER_O) {
            setPlayerTurn(PLAYER_X);
        }
    }

    /**
     * A function to initiate the check to see who the winner is (if any).
     * @returns void
     */
    const checkWinStatus = (tiles) => {
        const validWinCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

        for (let i = 0; i < validWinCombos.length; i++) {
            const [a, b, c] = validWinCombos[i];
            if (tiles[a] && (tiles[a] === tiles[b]) && (tiles[a] === tiles[c])) {
                setWinner(tiles[a]);
                setWinCombo([a, b, c]);
            }
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>TicTacToe - Built In React.js</h1>
            {
                winner ?
                <div className={styles.subtitle}>Winner: {winner}</div> :
                <div className={styles.subtitle}>Current Turn: {playerTurn}</div>
            }
            <Board
                playerTurn={playerTurn}
                winner={winner}
                winCombo={winCombo}
                tiles={tiles}
                onTileClick={handleTileClick}
            />
            <button className={styles.reset}>Reset</button>
        </div>
    )
}

export default TicTacToe;

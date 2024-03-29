import React from 'react';
import { useState } from 'react';
import styles from './TicTacToe.module.css';
import { PLAYER_O, PLAYER_X } from '../../Utils/constants';
import Board from './Board';
import History from './History';

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
     * @property {Array} winCombo The combination the won the current game.
     */
    const [winCombo, setWinCombo] = useState([]);
    /**
     * @property {Array<Object>} history The states/moves so far in the current game.
     * Sample data:
     * [
     *      {
     *          playerTurn: 'X',
     *          moves: [[]],
     *      },
     *      {
     *          winner: 'X',
     *          moves: [[],...,['XXX']],
     *      }
     * ]
     */
    const [history, setHistory] = useState([]);

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
        const nextTiles = tiles.slice();
        nextTiles[clickedTileIndex] = playerTurn;
        setTiles(nextTiles);

        // Update history
        let nextHistory = history.slice();
        /**
         * Add another object to the history array.
         * It should contain key: playerTurn with the current playerTurn.
         * And the same moves array as the previous entry PLUS the array of newly updated moves.
         * So the new object's moves 2D array should have an extra array element.
         */
        let nextMoves = nextHistory[nextHistory.length - 1]?.moves ?
            nextHistory[nextHistory.length - 1].moves.slice() :
            [];
        nextMoves.push(nextTiles);
        nextHistory.push({
            playerTurn: playerTurn,
            moves: nextMoves,
        });
        setHistory(nextHistory);

        // Update game
        checkWinStatus(nextTiles);
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
        if (!tiles) {
            return;
        }
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
                return;
            }
        }
        setWinner(null);
        setWinCombo([]);
    }

    /**
     * Function to reset the game and start over.
     * @return void
     */
    const resetGame = () => {
        setTiles(Array(9).fill(null));
        setHistory([]);
        setPlayerTurn(PLAYER_X);
        setWinCombo([]);
        setWinner(null);
    }

    /**
     * Function to set the game to a certain point.
     * @param {int} index
     * @param {Array<Object>} history
     * @return void
     */
    const setGame = (history) => {
        if (history.length < 1) {
            resetGame();
            return;
        }
        const { playerTurn, moves } = history[history.length - 1];
        setTiles(moves[moves.length - 1]);
        setHistory(history);
        setPlayerTurn(playerTurn);
        checkWinStatus(moves[moves.length - 1]);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>TicTacToe - Built In React.js</h1>
            {
                winner ?
                <div className={styles.subtitle}>Winner: {winner}</div> :
                <div className={styles.subtitle}>Current Turn: {playerTurn}</div>
            }
            <div className={styles['game-area']}>
                <Board
                    playerTurn={playerTurn}
                    winner={winner}
                    winCombo={winCombo}
                    tiles={tiles}
                    onTileClick={handleTileClick}
                />
                <History history={history} handleHistoryClick={setGame}/>
            </div>
            <button className={styles.reset} onClick={resetGame}>Reset</button>
        </div>
    )
}

export default TicTacToe;

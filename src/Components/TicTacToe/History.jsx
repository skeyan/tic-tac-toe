import React from 'react';
import styles from "./History.module.css";

/**
 * @param {Array} moves The moves that have been taken during the current game
 * @returns Component showing the move history of the current game
 */
export default function History({history, handleHistoryClick}) {
    const historyListComponent = history.map((individualHistory, index) => {
        let description = '';
        if (individualHistory.moves?.length > 0) {
          description = 'Go to move #' + index;
        } else {
          description = 'Go to game start';
        }
        const partialHistory = history.slice(0, index + 1);
        return (
          <li key={index} className={styles['move--button']}>
            <button onClick={() => handleHistoryClick(partialHistory)}>
              {description}
            </button>
          </li>
        );
      });

    return (
        <div className={styles['history-container']}>
          <ul>
            {historyListComponent}
          </ul>
        </div>
    )
}

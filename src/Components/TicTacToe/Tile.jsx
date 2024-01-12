import styles from './Tile.module.css';
import { PLAYER_O, PLAYER_X } from '../../Utils/constants';

/**
 * A single tile component
 * @param {String} value The text that should be entered in the tile center
 * @param {Int} index The number representing the tile
 * @param {Function} onClick The callback function to be performed on tile click
 * @param {String} playerTurn The constant value representing the name of the current player whose turn it is
 * @param {String} winner Identifier for the player who won
 * @param {Array} winCombo Array containing the winning tiles' identfiers
 * @returns A single tile component
 */
function Tile({ index, value, onClick, playerTurn, winner, winCombo }) {
    /**
     * A function to create the visual-only placeholder element that shows when hovering over a TicTacToe tile.
     * @returns HTML for the placeholder that shows on hover
     */
    function placeholderValue()  {
        // Do not show a placeholder if the game has already been won
        if (winner) {
            return;
        }

        if (playerTurn === PLAYER_X) {
            return <div className={styles['tile__value-placeholder']} inert="true">X</div>;
        } else if (playerTurn === PLAYER_O) {
            return <div className={styles['tile__value-placeholder']} inert="true">O</div>;
        }
    }

    return (
        <button className={
            (winner && winCombo.includes(index)) ?
            `${styles['tile']} ${styles['tile--win']}` :
            `${styles['tile']}`}
            onClick={onClick}
        >
            <div className={styles.tile__value}>
                {value ? value : placeholderValue()}
            </div>
        </button>
    );
}

export default Tile;
import styles from './Tile.module.css';
import { PLAYER_O, PLAYER_X } from '../../Utils/constants';

/**
 * A single tile component
 * @param {value} The text that should be entered in the tile center
 * @param {onClick} The callback function to be performed on tile click
 * @param {playerTurn} The constant value representing the name of the current player whose turn it is
 * @returns A single tile component
 */
function Tile({ value, onClick, playerTurn }) {

    function placeholderValue()  {
        if (playerTurn === PLAYER_X) {
            return <div className={styles['tile__value-placeholder']} inert aria-hidden="true" tabindex="-1">X</div>;
        } else if (playerTurn === PLAYER_O) {
            return <div className={styles['tile__value-placeholder']} inert aria-hidden="true" tabindex="-1">O</div>;
        }
    }

    return (
        <button className={styles.tile} onClick={onClick}>
            <div className={styles.tile__value}>
                {value ? value : placeholderValue()}
            </div>
        </button>
    );
}

export default Tile;
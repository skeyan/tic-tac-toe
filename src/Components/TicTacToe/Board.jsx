import Tile from "./Tile";
import styles from "./Board.module.css";
import Strike from "./Strike";

/**
 * A board component containing various tiles.
 * It represents the actual playing field.
 * @param {String} playerTurn Identifier for the player whose turn it currently is
 * @param {Array} tiles Array representing the values for the tiles on the board
 * @param {Function} onTileClick Callback function for clicking on a tile
 * @returns A Board component
 */
function Board({ playerTurn, winner, tiles, onTileClick }) {
    return (
        <div className={styles.board}>
            {tiles.map((tile, index) =>
                <Tile
                    value={tile}
                    key={index}
                    onClick={() => onTileClick(index)}
                    playerTurn={playerTurn}
                    winner={winner}
                />)
            }
            <Strike/>
        </div>
    );
}

export default Board;
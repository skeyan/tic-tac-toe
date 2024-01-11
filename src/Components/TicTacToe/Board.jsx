import Tile from "./Tile";
import styles from "./Board.module.css";
import Strike from "./Strike";

function Board({ playerTurn, tiles, onTileClick }) {

    return (
        <div className={styles.board}>
            {tiles.map((tile, index) =>
                <Tile
                    value={tile}
                    key={index}
                    onClick={() => onTileClick(index)}
                    playerTurn={playerTurn}
                />)
            }
            <Strike/>
        </div>
    );
}

export default Board;
import styles from './Tile.module.css';

function Tile({ value, onClick }) {
    return (
        <div className={styles.tile} onClick={onClick}>
            <div className={styles.tile__value}>
                {value}
            </div>
        </div>
    );
}

export default Tile;
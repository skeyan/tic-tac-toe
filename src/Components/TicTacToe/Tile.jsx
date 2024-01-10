import styles from './Tile.module.css';

function Tile({ value }) {
    return (
        <div className={styles.tile}>
            <div className={styles.tile__value}>
                {value}
            </div>
        </div>
    );
}

export default Tile;
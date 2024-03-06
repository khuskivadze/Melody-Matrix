import styles from'./Main.module.scss'
import Playlist from './Playlist/Playlist'
import Trends from './Trends/Trends'

export default () => {
    return (
        <main className={styles.main}>
            <Trends/>
            <Playlist/>


        </main>
    )
}
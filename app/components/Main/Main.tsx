import Artists from './Artists/Artists'
import styles from'./Main.module.scss'
import Playlist from './Playlist/Playlist'
import Responsive from './Responsive/Responsive'
import Stories from './Stories/Stories'
import Trends from './Trends/Trends'

export default () => {
    return (
        <main className={styles.main}>
            <Trends/>
            <Playlist/>
            <Stories/>
            <Artists/>
            <Responsive/>


        </main>
    )
}
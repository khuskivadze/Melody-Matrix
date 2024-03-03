import Link from 'next/link';
import Button from '../../Buttons/Button';
import styles from './HeaderCont.module.scss';

export default () => {
    return (
        <section className= {styles.content}>

            <div className= {styles.comp}>
                <img src="/Group 3429.png" alt="" />
            </div>
            <div className={styles.title}>
                <h1>LISTEN TO YOUR MUSIC THEN RELAX IN PEACE</h1>
            </div>

            <div className={styles.getStart}>
                 <Link href="/">
                    <Button title='Get Started' icon='on' />
                 </Link>
            </div>

        </section>
    )
}
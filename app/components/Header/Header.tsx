import styles from './Header.module.scss';
import Menu from '../Menu/Menu';
 


export default () => {
    return (
        <header className= {styles.header}>
           <section className= {styles.overlay}>
            <Menu/>


           </section>    
        </header>
     
    )
}
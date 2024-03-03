import styles from './Header.module.scss';
import HeaderCont from './HeaderContent/HeaderCont';
import Menu from './Menu/Menu';
 


export default () => {
    return (
        <header className= {styles.header}>
          <section className= {styles.overlay}>
            <Menu/>
            <HeaderCont/>

             
            
             
          </section>  
          
            
        </header>
     
    )
}
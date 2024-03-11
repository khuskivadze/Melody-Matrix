import { title } from 'process';
import Button from '../../Buttons/Button';
import styles from './Responsive.module.scss';

export  default () => {


   

    return (
     
          
        <section className={styles.section}>

            <div className= {styles.container}>
                <div className= {styles.left}>
                    <div className= {styles.top}>
                        <div className= {styles.con}>
                            <img src="/Frame 3437.png" alt="" />
                        </div>
                    </div>
                    <div className= {styles.bottom}>
                        <p className= {styles.text}>You can enjoy uninterrupted music for any occasion without any annoying ads.</p>
                        
                        <div className= {styles.btns}>
                         <Button title='Desktop Mode' mode='outline' icon='off' className= {styles.btn}/>
                         <Button title='Download App' mode='outline' icon='off' className= {styles.btn}/>
                        </div>

                    </div>

                    


                </div>


                <div className= {styles.right}>
                    <div className= {styles.cont}>
                        <img src="/Frame 203.png" alt=""  className= {styles.logo1} />
                        <img src="/logo 202.png" alt="" className= {styles.logo2} />

                    </div>
                </div>
            </div>

        </section>
    )
}
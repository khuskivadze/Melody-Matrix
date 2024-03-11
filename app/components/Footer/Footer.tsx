import styles from './Footer.module.scss';

import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaSpotify } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import Button from '../Buttons/Button';



export default () => {
    return (
        <footer className= {styles.footer}>
            <div className= {styles.top}>
                <div className= {styles.menu}>
                   
                      
                         
                     
                        <ul className= {styles.lists}>
                                <li className= {styles.title}>Company</li>
                                <li className= {styles.title}>Services</li>
                                <li className= {styles.title}>Support</li>
                         
                                <li className= {styles.text}>about</li>
                                <li className= {styles.text}>Premium Account</li>
                                <li className= {styles.text}> Pricing Plan</li>

                                <li className= {styles.text}>Blog</li>
                                <li className= {styles.text}>Mobile App</li>
                                <li className= {styles.text}>Documentation</li>
                             
                            
                                <li className= {styles.text}>Join Us </li>
                                <li></li>
                              
                                <li className= {styles.text}>Tutorial</li>
                           
                        </ul>
                    
                </div>
                <div className= {styles.contact}>
                    <form action="" className= {styles.form}>
                       <label htmlFor="name">Subcribe to our newsletter</label>
                        <div>
                         <input type="email" name="email" id="email"  placeholder='Your Email Aress' />
                         <Button title='Subscribe' icon='off' mode='outline' className= {styles.subscribe}/>
                        </div>
                    </form>

                </div>




            </div>
            <div className= {styles.line}></div>

            <div className= {styles.bottom}>
                <p>Design with  ©  2024. All right reserved</p>
                <div className= {styles.social}>
                     <FaFacebook />
                     <RxInstagramLogo />
                     <FaSpotify />
                     <TbBrandYoutube />
                </div>

            </div>



        </footer>
    )
}
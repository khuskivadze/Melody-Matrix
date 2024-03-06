import { Carousel, CarouselProps, RadioChangeEvent } from 'antd';
import styles from './Trends.module.scss'
import { useState } from 'react';
 
 
 
 
 
type DotPosition = CarouselProps['dotPosition'];

const contentStyle: React.CSSProperties = {
    height: '480px',
    color: '#fff',
  
    
   
    display: 'grid',
    justifyContent:'center',
   
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    gap:'20px',
 
  };
 

export default () => {
   
 
    const [dotPosition, setDotPosition] = useState<DotPosition>('bottom');

    const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
      setDotPosition(value);
    };
  
    return (
        <section className={styles.section}>
            <div className={styles.trends}>
                <div className={styles.heading}>
                    <h1>Treneds</h1>
                </div>

                <section className= {styles.Trends_lists }>
                <Carousel dotPosition={dotPosition}>
                       <div>
                            <div style={contentStyle}>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Ella Baila Sola</p>
                                         <span>Eslabon Armado</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card2.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Flowers</p>
                                         <span>Miley Cyrus</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card3.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p> Fly Girl</p>
                                         <span>Flo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card4.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Last Night</p>
                                         <span>Morgan Wallen</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card5.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>My Love Mine All ... </p>
                                         <span> Mitski </span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card6.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Houdini</p>
                                         <span>Dua Lipa</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card7.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Fast Carl</p>
                                         <span> Luke Combs</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card8.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span>Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card9.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Last Night</p>
                                         <span>Morgan Wallen</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card10.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>I Remember Every </p>
                                         <span>Zach Bryan</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card11.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Dance The Night</p>
                                         <span>Lipa</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card12.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Butter</p>
                                         <span>BTS</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card13.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>I'm Good (Blue) </p>
                                         <span> David Guetta </span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card14.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Miracle</p>
                                         <span>Calvin Harris</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card15.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>WHERE SHE GOES</p>
                                         <span> Bad Bunny</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card16.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Flowers</p>
                                         <span> Cyrus</span>

                                    </div>
                                </div>                                       
                                                           
                            </div>
                       </div>


                       <div>
                            <div style={contentStyle}>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card18.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card8.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card8.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/card17.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Deja Vu</p>
                                         <span> Olivia Rodrigo</span>

                                    </div>
                                </div>                                                              
                                                           
                            </div>
                       </div>
                </Carousel>
                </section>
              
                     
              
            </div>
            
        </section>
    )
}
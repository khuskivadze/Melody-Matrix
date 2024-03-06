import { Carousel, CarouselProps, RadioChangeEvent } from 'antd'
import styles from  './Playlist.module.scss'
import { useState } from 'react';

type DotPosition = CarouselProps['dotPosition'];

const contentStyle: React.CSSProperties = {
    height: '480px',
    color: '#fff',
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
     
    };

export  default () => {

    const [dotPosition, setDotPosition] = useState<DotPosition>('bottom');

    const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
      setDotPosition(value);
    };
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                    <h1>PlayList</h1>
            </div>

            <section className= {styles.playlist_lists}>

            <Carousel dotPosition={dotPosition}>
                    <div>
                            <div style={contentStyle}>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/play1.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>2023 Hit Songs</p>
                                          <img src="/play.png" alt="" />

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/play2.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Dance Workout</p>
                                          <img src="/play.png" alt="" />

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/play3.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Top Classic </p>
                                          <img src="/play.png" alt="" />

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/play4.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Non Stop Party</p>
                                          <img src="/play.png" alt="" />

                                    </div>
                                </div>
                            </div>
                    </div>

                    <div>
                           <div style={contentStyle}>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/play5.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Playlist 1</p>
                                          <img src="/play.png" alt="" />

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/play5.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Playlist 1</p>
                                          <img src="/play.png" alt="" />

                                    </div>
                                </div>
                                <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/play5.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Playlist 1</p>
                                          <img src="/play.png" alt="" />

                                    </div>
                                </div>
                                 <div className= {styles.box}>
                                    <div className= {styles.img}>
                                        <img src="/play5.png" alt="" />
                                    </div>
                                    <div className={styles.title}>
                                        <p>Playlist 1</p>
                                          <img src="/play.png" alt="" />

                                    </div>
                                </div>
                               
                            </div>
                    </div>
                       
                       
                        
                </Carousel>

           


            </section>
            

        </section>
    )
}
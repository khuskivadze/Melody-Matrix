 
import styles from './Artist.module.scss';
import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        img: '/Frame 179.png',
        title: 'Harry Styles'
    },
    {
        img: '/Frame 176.png',
        title: 'Taylor Swift'
    },
    {
        img: '/Frame 19.png',
        title: 'Selena Gomez'
    },
    {
        img: '/Frame 20.png',
        title: 'Justin Biber'
    },
    {
        img: '/Frame 21.png',
        title: 'Shakira'
    },
    {
        img: '/Frame 180.png',
        title: 'Adele'
    },
    {
        img: '/Frame 182.png',
        title: 'Lady Gaga'
    },


  


   









    
]
 
 
 

export default () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 5,
        sliesToScroll: 1,
     
       
    
        
    };

    
    return (
        <section className={styles.section}>
              <div className={styles.title}>
                    <h1>Artists</h1>
              </div>

              <div className= {styles.contianer}>

                <div className= {styles.box}>
                <Slider className={styles.slider} {...settings}>
                    {data.map((d : any)  =>  (
                        <div className= {styles.card}>
                            <div>
                                <img src={d.img} alt="" />
                            </div>
                            <div>
                                <p>{d.title}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>

              </div>

             
              
        </section>
    )
}
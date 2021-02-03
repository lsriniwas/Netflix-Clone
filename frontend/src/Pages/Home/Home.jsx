import React, { useState, useEffect, forwardRef } from 'react'
import { Link } from 'react-router-dom';

import styles from "./home.module.css"
import Slider from '../../Components/NetflixSlider'


const movies = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: '1983'
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Russian doll'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'The rain',
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education'
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite'
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  }
];


const links = ['Home', 'TV Shows', 'Movies', 'My List']


function Home(props) {
    const [scrolled, setScrolled] = useState(false)
    console.log(scrolled)
    useEffect(() => {
        const handleScroll = () =>
          window.pageYOffset > 75 ? setScrolled(true) : setScrolled(false)
    
        const onScroll = window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', onScroll)
        }
      }, [])
    
    return (
       
        <>
            <nav className={`${styles.navbar}  ${scrolled ? styles.blackBackGround : styles.backgroundTransparent }`} >
                  <ul  className={styles.left}>
                    <li>
                    <a href="/">
                        <img height="75" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                    </a>
                    </li>

                    {links.map(link => (
                    <li key={link}>
                        <a href="/">{link}</a>
                    </li>
                    ))}
                </ul>

                <ul className={styles.right}>
                    <li>
                    <i className = "Icon fa fa-search search" />
                    </li>
                    <li>
                    <i className="Icon fa fa-bell-o" />
                    </li>
                </ul>
          
          </nav>
          <div style={{height:"1000px"}}>
          <div className={styles.hero}>
                <div className={styles.synopsis}>
               

                <p>
                    All he wants to do is leave town and start over. But first, he needs to
                    deal with his ex, his new roomie and the enemies who want him dead.
                </p>

                <button className={styles.play_btn} >
                    <i className = "Icon fa fa-play play" />
                        Play
                </button>
                <button >
                    <i className = "Icon fa fa-info-circle info-circle" />
                        More Info
                    </button>
                </div>

                
            </div> 
         <div>
             <h2>Movies</h2>
         <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
         </div>
            <div>
            <h2>Shows</h2>
            <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
            </div>
       
          </div>
          </>
    );
}

export default Home;
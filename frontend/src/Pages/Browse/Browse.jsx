import React, { useEffect, useState } from 'react';
import styles from './browse.module.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import axios from 'axios';
const links = ["Home", "TV Shows", "Movies", "My List"];


function Browse(props) {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mute, setMute] = useState(true);
  const [play,setPlay]=useState(true)
  // console.log(movieList);
  

  useEffect(()=>{

    axios.get(`${process.env.REACT_APP_BASE_URL}/api/show`).then(res=>{
      let actionData = {
        title:"Action",
        data:[]
      }

      let romanceData = {
        title:"Romance",
        data:[]
      }

      let comedyData = {
        title:"Comedy",
        data:[]
      }

      let horrorData = {
        title:"Horror",
        data:[]
      }

      res.data.forEach((data)=>{
        const genere = data.genre_ids.map(genere=>genere.name)
        if(genere.includes("Action")){
          actionData.data.push(data)
        }
        if(genere.includes("Comedy")){
          comedyData.data.push(data)
        }
        if(genere.includes("Romance")){
          romanceData.data.push(data)
        }
        if(genere.includes("Horror")){
          horrorData.data.push(data)
        }

        
      })
      let results = [actionData,horrorData,comedyData,romanceData]
      
      setMovieList(results)
    })
    // const loadAll = async () => {
    //   // Pegando a lista TOTAL
    //   let list = await Tmdb.getHomeList();
    //  console.log(list)

    //   // Pegando o Featured
    //   let originals = list.filter(i=>i.slug === 'originals');
    //   let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    //   let chosen = originals[0].items.results[randomChosen];
    //   let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    //   setFeaturedData(chosenInfo);
    // }

    // loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

     
      <div className={styles.root}>
      
      <div className={styles.reactplayer}>
        <video aloop="1" autoPlay={play} muted={mute} width="100%"
         poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
   >
        </video>
        <div className={styles.video__info}>
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
        <div className={styles.video__info__right}>
               <div
               onClick={()=>setMute(prev=>!prev)}
               >
              { !mute?<VolumeUpIcon style={{
                 color:'#fff',
                 cursor:'pointer'
               }}/>
               :
               <VolumeOffIcon style={{
                 color:'#fff',
                 cursor:'pointer'
               }}/>}
               </div>
        </div>
        <div
        className={styles.video__bottom}
        >
        {/* {
    movieList.length ? <section className={styles.lists}>
    {[movieList].map((item, key)=>(
      <MovieRow key={key} title="My List" items={item} />
    ))}
   </section> : <></>
    } */}
        </div>
      </div>
    </div>

    
    
  
  
    {
    movieList.length ? <section className="lists">
    {movieList.map((item, key)=>(
      <MovieRow key={key}  title={item.title}  items={item.data} />
    ))}
  </section> : <></>
   }

 
     
    </div>
  );
}

export default Browse;



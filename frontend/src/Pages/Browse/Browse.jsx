import React, { useEffect, useState } from 'react';
import styles from './browse.module.css'
import Tmdb from './Tmdb';

import {useDispatch, useSelector} from 'react-redux'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import {Header} from "./components/Header"
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import axios from 'axios';
import { makeGetMoviesRequest } from '../../Redux/Movies/action.js';
import { makeGetSeriesRequest } from '../../Redux/TvShows/action';
import { Search } from '../Search/Search';
import { Redirect } from 'react-router-dom';


const links = ["Home", "TV Shows", "Movies", "My List"];


function Browse(props) {
  const [search, setSearch] = useState("")
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mute, setMute] = useState(true);
  const [play,setPlay]=useState(true);
  const dispatch = useDispatch();
  const {movies} = useSelector(state=>state.movies)
  const {series} = useSelector(state=>state.series)
const searchList=useSelector((state)=>state.search.searchResults)

  useEffect(()=>{
    dispatch(makeGetMoviesRequest())
    dispatch(makeGetSeriesRequest())
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

      <Header black={blackHeader} search={search} setSearch={setSearch} />

     {searchList.length<1 ?
     <>
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
               A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness.
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
          movies.length ? <section className="lists">
          {movies.map((item, key)=>(
            <MovieRow isTvShow={true} key={key}  title={item.title}  items={item.data} />
          ))}
        </section> : <></>
        }

          {
          series.length ? <section className="lists">
          {[series].map((item, key)=>(
            <MovieRow key={key} isTvShow={true}  title={"Series"}  items={item} />
          ))}
        </section> : <></>
        }
        </>
  :
  <>
         <Search/>
  </>

}
 
     
    </div>
  );
}

export default Browse;



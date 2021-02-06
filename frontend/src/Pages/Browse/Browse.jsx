import React, { useEffect, useState } from 'react';
import styles from './browse.module.css';
import { getSearchSuccess } from '../../Redux/Search/action'
import { useDispatch, useSelector } from 'react-redux'
import MovieRow from './components/MovieRow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { makeGetMoviesRequest } from '../../Redux/Movies/action.js';
import { makeGetSeriesRequest } from '../../Redux/TvShows/action';
import { Search } from '../Search/Search';
import { getProfiles, setCurrentProfile } from '../../Redux/Profile/actions/profileActions';
import { MainLayout } from '../../Components/Main-Layout/MainLayout';
import Loader from '../../Components/Loader/Loader';




function Browse(props) {
  const [blackHeader, setBlackHeader] = useState(false);
  const [mute, setMute] = useState(true);
  const [play, setPlay] = useState(true);
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector(state => state.movies)
  const { series } = useSelector(state => state.series)
  const { searchResults: searchList} = useSelector((state) => state.search)
  const { currentProfile } = useSelector(state => state.profiles)


  useEffect(() => {
    dispatch(makeGetMoviesRequest())
    dispatch(makeGetSeriesRequest())
    dispatch(getSearchSuccess([]))
    if (!currentProfile) {
      let token = localStorage.getItem("token")
      dispatch(getProfiles(token))
      dispatch(setCurrentProfile(JSON.parse(localStorage.getItem("currentProfile"))))
    }

  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
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
    <MainLayout>

      {
        isLoading ? <Loader /> :
          searchList.length === 0 ?
            <div className="page">

              {/* <Header black={blackHeader} search={search} setSearch={setSearch} /> */}
              <div className={styles.root}>

                <div className={styles.reactplayer}>
                  <video aloop="1" autoPlay={play} muted={mute} width="100%"
                    poster="https://i.ytimg.com/vi/htvVnHnroQ4/maxresdefault.jpg"
                    src="https://mphomeservices.it/videos/Ad%20Astra%20_%20Official%20Trailer%20%5BHD%5D%20_%2020th%20Century%20FOX.mp4"
                  >
                  </video>
                  <div className={styles.video__info}>
                    <div className={styles.synopsis}>
                      <p>
                        A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness.
               </p>
                      <button className={styles.play_btn} >
                        <i className="Icon fa fa-play play" />
                       Play
               </button>
                      <button >
                        <i className="Icon fa fa-info-circle info-circle" />
                       More Info
                   </button>
                    </div>
                  </div>
                  <div className={styles.video__info__right}>
                    <div
                      onClick={() => setMute(prev => !prev)}
                    >
                      {!mute ? <VolumeUpIcon style={{
                        color: '#fff',
                        cursor: 'pointer'
                      }} />
                        :
                        <VolumeOffIcon style={{
                          color: '#fff',
                          cursor: 'pointer'
                        }} />}
                    </div>
                  </div>
                  <div
                    className={styles.video__bottom}
                  >

                  </div>
                </div>
              </div>
              {
                movies.length ? <section className="lists">
                  {movies.map((item, key) => (
                    <MovieRow isTvShow={true} key={key} title={item.title} items={item.data} />
                  ))}
                </section> : <></>
              }

              {
                series.length ? <section className="lists">
                  {[series].map((item, key) => (
                    <MovieRow key={key} isTvShow={true} title={"Series"} items={item} />
                  ))}
                </section> : <></>
              }
              {/* <HomeFooter /> */}
            </div>
            : <Search />
      }
    </MainLayout>
  );
}
export default Browse;



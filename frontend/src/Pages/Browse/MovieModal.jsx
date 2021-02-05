import { Button, Divider, MenuItem, Paper, Select } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react'
import styles from "./Movie.module.css"
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { useState } from 'react';
import axios from "axios"
export const MovieModal = ({ modalClose, Movie,handleClose }) => {
    const [mute, setMute] = React.useState(true);
    const [seasons, setSeasons] = useState(false);
    const [episodeList, setEpisodeList] = useState([]);
    const [index, setIndex] = useState(0)
    const [movie, setMovie] = useState(Movie)
   
    const handleSeasons = (index) => {
        setIndex(index)
        setEpisodeList(movie.seasons[index].episodes)
        setSeasons(prev => !prev)
    }

    const handleSeasonButton = () => {
        setSeasons(prev => !prev)

    }
   
    
    return (
        <Paper className={styles.root} elevation={24} >

            <div className={styles.reactplayer}>
                {/* <video aloop="1" autoPlay={true} muted={1} width="100%" height="100%"
                    poster={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`}
                    src="https://drive.google.com/file/d/1ZI1x_sx4jjMG-e7hn4Dn_fHwRX5lslG3/view"
                >
                </video>
                 */}
                  <iframe style={{
                      marginTop:'-70px',
                    //   marginBottom:'-70px'
                  }}  width="100%" title="hello" height="576" src={`https://www.youtube.com/embed/${movie.video}?autoplay=1&showinfo=0&controls=0&mute=1&rel=0`} 
                  frameBorder="0" autoPlay="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
                <div className={styles.video__info}>
                    <div className={styles.synopsis}>
                        <button className={styles.play_btn} >
                            <i className="Icon fa fa-play play" />
                                 Play
                         </button>
                        <div className={styles.synopsis_tooltips}>
                            <Tooltip title="Add to My List"
                                className={styles.synopsis_tooltips_single}
                                placement="top"
                                arrow
                            >
                                <AddIcon style={{ fontSize: '24px' }} />
                            </Tooltip>
                            <Tooltip title="I like this"
                                className={styles.synopsis_tooltips_single}
                                placement="top"
                                arrow
                            >
                                <ThumbUpAltOutlinedIcon style={{ fontSize: '24px' }} />
                            </Tooltip>
                            <Tooltip title="Rated"
                                className={styles.synopsis_tooltips_single}
                                placement="top"
                                arrow
                            >
                                <ThumbDownAltOutlinedIcon style={{ fontSize: '24px' }} />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={styles.close} onClick={() => handleClose()}>
                    <CloseIcon onClick={handleClose} />
                </div>
                <div className={styles.video__info__right}>
                    <div
                        className={styles.video__info__right_volume}
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
            </div>
            <div className={styles.wrapper}>
                <div className={styles.movie_info}>
                    <div className={styles.movie_info_left}>
                        <div className={styles.movie_info_left__first}>
                            <p className={styles.movie_info_left__first_green}>{`${movie.vote_average * 10}% Match `}</p>
                            {

                                movie.type !== "Scripted" && <p>{movie.release_date.split("-")[0]}</p>
                            }

                        </div>
                        <div className={styles.movie_info_left__first}>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <div className={styles.movie_info_right}>
                        <div>
                            <span>Genres:</span>
                            {
                                movie.genre_ids.length !== 0 && movie.genre_ids.map((genre, i) => {
                                    return (
                                        <span className={styles.movie_info_right_links} key={genre._id}>{genre.name}{`${movie.genre_ids.length - 1 !== i ? ',' : ''}`}</span>
                                    )
                                })
                            }</div>

                    </div>
                </div>
                {
                    movie.type === "Scripted" && movie.seasons.length !== 0 &&

                    <div>
                        <div className={styles.episode_selector}>
                            <div className={styles.episode_selector_left}>
                                <h2>Episodes</h2>
                            </div>
                            <div className={styles.episode_selector_right}>
                                <Button variant="outlined" onClick={() => handleSeasonButton()}
                                >{`Season  ${index + 1}`}</Button>
                            </div>
                            {
                                seasons &&
                                <div className={styles.episode_selector_right_ul}>
                                    <ul>
                                        {
                                            movie.seasons.map((item, i) =>
                                                <li key={item._id} onClick={() => handleSeasons(i)}>
                                                    <h3>{`Season ${i + 1}`}</h3>
                                                    <p>{`(${item.episodes.length} Episodes)`}</p>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className={styles.episodelist}>
                            <ul>
                                {
                                    episodeList.length !== 0 && episodeList.map(item =>
                                        <li key={item._id} >
                                            <div className={styles.episodelist_ul_li_h1} >
                                                <h1>{item.episode_number}</h1></div>
                                            <div className={styles.episodelist_ul_li_img}>
                                                <img src={`https://image.tmdb.org/t/p/w300/${item.still_path}`} alt="" />
                                            </div>
                                            <div className={styles.episodelist_ul_li_info}>
                                                <div>
                                                    <h4>
                                                        {item.name}
                                                    </h4>
                                                </div>
                                                <div>
                                                    <p>{item.overview}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                                <li>
                                    <div className={styles.footer}>
                                        <h1>
                                            Title: {movie.name}
                                        </h1>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                }
                {
                    movie.type !== "Scripted" &&
                    <div className={styles.footer}>
                        <h1>
                            Title: {movie.title}
                        </h1>
                    </div>
                }
            </div>
        </Paper>
    )
}

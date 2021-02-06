import { Box, Button} from '@material-ui/core'
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
import { useHistory } from 'react-router-dom';



export const MovieModal = ({ Movie,handleClose,handleLike,handleDislike,handleAddToList,liked,disliked,inList }) => {
    const [mute, setMute] = useState(true);
    const [seasons, setSeasons] =  useState(false);

    const episodes = Movie.seasons ? Movie.seasons[0].episodes : [];

    const [episodeList, setEpisodeList] = useState(episodes)
    
    const [index, setIndex] = useState(0)
    const history = useHistory()
   
   const handleSeasons = (index) => {
        setIndex(index)
        setEpisodeList(Movie.seasons[index].episodes)
        setSeasons(prev => !prev)
    }

    const handleSeasonButton = () => {
        setSeasons(prev => !prev)

    }
   
    
    return (
       
<>
            <Box className={styles.reactplayer}>
                  <iframe style={{
                      marginTop:'-70px',
                  }}  width="100%" title="hello" height="576" src={`https://www.youtube.com/embed/${Movie.video}?autoplay=1&showinfo=0&controls=0&mute=1&rel=0`} 
                  frameBorder="0" autoPlay="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                <div className={styles.video__info}>
                    <div className={styles.synopsis}>
                        <button className={styles.play_btn} onClick={()=>history.push(`/video/${Movie.video}`)} >
                            <i className="Icon fa fa-play play" />
                                 Play
                         </button>
                        <div className={styles.synopsis_tooltips}>
                            {
                                inList ?  <Tooltip title="In List"
                                            className={`${styles.synopsis_tooltips_single}` }
                                            placement="top"
                                            arrow
                                            >
                                                
                                                    <AddIcon onClick={()=>handleAddToList(Movie._id)} className={styles.highlight} style={{ fontSize: '24px'}} />
                                                
                                            </Tooltip>
                                            :
                                        <Tooltip title="Add to My List"
                                        className={styles.synopsis_tooltips_single}
                                        placement="top"
                                        arrow
                                        >
                                            <AddIcon onClick={()=>handleAddToList(Movie._id)} style={{ fontSize: '24px' }} />
                                        </Tooltip>
                            }


                            {

                                    liked ?  <Tooltip title="I like this"
                                    className={`${styles.synopsis_tooltips_single}` }
                                    placement="top"
                                    arrow
                                    >
                                        
                                        <ThumbUpAltOutlinedIcon onClick={()=>handleLike(Movie._id)} className={styles.highlight} style={{ fontSize: '24px' }} />
                                        
                                    </Tooltip>
                                    :
                                    <Tooltip title="Like this"
                                    className={styles.synopsis_tooltips_single}
                                    placement="top"
                                    arrow
                                    >
                                    <ThumbUpAltOutlinedIcon onClick={()=>handleLike(Movie._id)} style={{ fontSize: '24px' }} />
                                    </Tooltip>


                            }

                            {

                            disliked ?  

                                <Tooltip title="I dislike this"
                                className={styles.synopsis_tooltips_single}
                                placement="top"
                                arrow
                                >
                                <ThumbDownAltOutlinedIcon onClick={()=>handleDislike(Movie._id)} className={styles.highlight} style={{ fontSize: '24px' }} />
                                </Tooltip> :

                                <Tooltip title="dislike this"
                                className={styles.synopsis_tooltips_single}
                                placement="top"
                                arrow
                            >
                                <ThumbDownAltOutlinedIcon  onClick={()=>handleDislike(Movie._id)} style={{ fontSize: '24px' }} />
                            </Tooltip>


                            }
                           
                          
                           
                        </div>
                    </div>
                </div>
                <div className={styles.close} onClick={handleClose}>
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
            </Box>
            <Box className={styles.wrapper}>
                <div className={styles.movie_info}>
                    <div className={styles.movie_info_left}>
                        <div className={styles.movie_info_left__first}>
                            <p className={styles.movie_info_left__first_green}>{`${Movie.vote_average * 10}% Match `}</p>
                            {

                                Movie.type !== "Scripted" && <p>{Movie.release_date.split("-")[0]}</p>
                            }

                        </div>
                        <div className={styles.movie_info_left__first}>
                            <p>{Movie.overview}</p>
                        </div>
                    </div>
                    <div className={styles.movie_info_right}>
                        <div>
                            <span>Genres:</span>
                            {
                                Movie.genre_ids.length !== 0 && Movie.genre_ids.map((genre, i) => {
                                    return (
                                        <span className={styles.movie_info_right_links} key={genre._id}>{genre.name}{`${Movie.genre_ids.length - 1 !== i ? ',' : ''}`}</span>
                                    )
                                })
                            }</div>

                    </div>
                </div>
                {
                    Movie.type === "Scripted" && Movie.seasons.length !== 0 &&

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
                                            Movie.seasons.map((item, i) =>
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
                                            Title: {Movie.name}
                                        </h1>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                }
                {
                    Movie.type !== "Scripted" &&
                    <div className={styles.footer}>
                        <h1>
                            Title: {Movie.title}
                        </h1>
                    </div>
                }
            </Box>
        </>
    )
}


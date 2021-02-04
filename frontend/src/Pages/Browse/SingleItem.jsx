import React, { useState } from 'react'
import styles from "./ShowMovies.module.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckIcon from '@material-ui/icons/Check';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideoPlayer from './VideoPlayer';


export const SingleItem = ({item}) => {

    const [show, setShow] = useState(false)

    return (
        <div className= {styles.card_wrapper}>
                <div className={styles.card}>
                    <div className= {styles.card_image} >
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                    </div>
                    <ul className={styles.icons}>
                        <li><a href="#"> <PlayArrowIcon/> </a> </li>
                        <li><a href="#"> <CheckIcon/> </a></li>
                        <li><a href="#"> <ThumbUpAltIcon/> </a></li>
                        <li><a href="#"><ThumbDownAltIcon/> </a></li>
                    </ul>
                    <div className= {styles.details} >
                        <div className = {styles.downbad}>

                        </div>
                       
                        <span className={styles.job_title}>  </span>
                        <div className = {styles.genres}>
                        {item.genre_ids[0] && <div> {item.genre_ids[0].name} </div> }
                        { item.genre_ids[1] && <div> • </div> }
                            {item.genre_ids[1] && <div> {item.genre_ids[1].name} </div> }
                            { item.genre_ids[2] && <div> • </div> }
                          {item.genre_ids[2] && <div> {item.genre_ids[2].name} </div> }  
                        </div>
                        <div className = {styles.btm}>
                            <div className = {styles.btmleft}>
                                <div style = {{marginBottom: "10px"}} > 
                                    Votes: {item.vote_average}
                                </div>
                                <div>
                                    {item.original_title}
                                </div>
                            </div>
                            <div className = {styles.btmright}>
                                <div> <ExpandMoreIcon/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


import React, { useState } from 'react'
import styles from "./ShowMovies.module.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckIcon from '@material-ui/icons/Check';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideoPlayer from './VideoPlayer';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Backdrop, Fade, Modal, Paper } from "@material-ui/core";
import { MovieModal } from "./MovieModal";




const highlightStyle = {backgroundColor:"white",color:"black"}

export const SingleItem = ({item,handleLike,handleDislike,handleAddToList,isTvShow}) => {
        const {currentProfile} = useSelector(state=>state.profiles);
        const [show, setShow] = useState(false);
        console.log(isTvShow)
        console.log(item)
        const [modalOpen,setModalOpen]=useState(false);
        // const [item,setItem]=useState();
        const handleModalButton=()=>{
            setModalOpen(true)
            console.log("hello")
        }
                
        const history = useHistory();

        const handleClose = () => {
            setModalOpen(false)
        }

        const isLiked = (id)=>{
           
           return currentProfile.likes.includes(id) 
        }

        const isDisLiked = (id)=>{
           
            return currentProfile.dislikes.includes(id) 
         }

         const inList = (id)=>{
           const index = currentProfile.myList.findIndex(list=>list._id===id)
           return index > -1 ? true : false
         }

        useEffect(()=>{
           
          
        },[currentProfile])


    return (
        <div className= {styles.card_wrapper}>
                <div className={styles.card}>
                    <div  className= {styles.card_image} >
                        <img alt="movie poster" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                    </div>
                    <ul className={styles.icons}>
                        <li onClick={()=>history.push(`/video/${item.video}`)}><PlayArrowIcon/>  </li>
                        
                        {
                          
                           inList(item._id) ? 
                           <li style={highlightStyle} onClick={()=>handleAddToList(item._id)}><CheckIcon/></li> : 
                           <li onClick={()=>handleAddToList(item._id)}><CheckIcon/> </li> 
                       }
                       {
                          
                           isLiked(item._id) ?   
                           <li style={highlightStyle} onClick={()=>handleLike(item._id)}><ThumbUpAltIcon/> </li> : 
                           <li onClick={()=>handleLike(item._id)}><ThumbUpAltIcon/> </li> 
                       }

                        {
                            
                           isDisLiked(item._id) ?   
                           <li style={highlightStyle} onClick={()=>handleDislike(item._id)}><ThumbDownAltIcon/> </li> : 
                           <li onClick={()=>handleDislike(item._id)}><ThumbDownAltIcon/> </li> 
                       }

                     
                        
                        
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
                                <div onClick={()=>{
                                    handleModalButton()}}> <ExpandMoreIcon/></div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                open={modalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >   
                    <MovieModal handleClose={handleClose} Movie={item}/>
                    
            </Modal>
            </div>
    )
}


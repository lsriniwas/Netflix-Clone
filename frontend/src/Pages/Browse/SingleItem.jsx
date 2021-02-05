import React, { useState } from 'react'
import styles from "./ShowMovies.module.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckIcon from '@material-ui/icons/Check';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Backdrop, Modal } from "@material-ui/core";
import { MovieModal } from "./MovieModal";




const highlightStyle = {backgroundColor:"white",color:"black"}

export const SingleItem = ({item,handleLike,handleDislike,handleAddToList,isTvShow,applyClass=""}) => {
        const {currentProfile} = useSelector(state=>state.profiles);
        const [modalOpen,setModalOpen]=useState(false);
        const handleModalButton=()=>{
            setModalOpen(true)
          
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

         const isInList = (id)=>{
           const index = currentProfile.myList.findIndex(list=>list._id===id)
           return index > -1 ? true : false
         }

         const liked =  isLiked(item._id)
         const disliked = isDisLiked(item._id) 
         const inList =   isInList(item._id) 
        
        
         useEffect(()=>{
           
          
        },[currentProfile])


    return (
        <>
        <div   className= {`${styles.card_wrapper} ${applyClass}`}>
                <div className={styles.card}>
                    <div  className= {styles.card_image} >
                        <img alt="movie poster" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                    </div>
                    <ul className={styles.icons}>
                        <li onClick={()=>history.push(`/video/${item.video}`)}><PlayArrowIcon />  </li>
                        
                        {
                          
                           inList ? 
                           <li style={highlightStyle} onClick={()=>handleAddToList(item._id)}><CheckIcon /></li> : 
                           <li onClick={()=>handleAddToList(item._id)}><CheckIcon/> </li> 
                       }
                       {
                          
                           liked ?   
                           <li style={highlightStyle} onClick={()=>handleLike(item._id)}><ThumbUpAltIcon/> </li> : 
                           <li onClick={()=>handleLike(item._id)}><ThumbUpAltIcon   /> </li> 
                       }

                        {
                            
                           disliked ?   
                           <li style={highlightStyle} onClick={()=>handleDislike(item._id)}><ThumbDownAltIcon  /> </li> : 
                           <li onClick={()=>handleDislike(item._id)}><ThumbDownAltIcon /> </li> 
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
                                <div  > 
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
                     <div className={styles.root}  >
                     <MovieModal handleLike={handleLike} handleDislike={handleDislike} handleAddToList= {handleAddToList} liked={liked} disliked={disliked} inList={inList} handleClose={handleClose} Movie={item}/>
                     </div>
                    
            </Modal>
            </>
    )
}


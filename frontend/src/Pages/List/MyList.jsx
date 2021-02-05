import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfiles, setCurrentProfile } from '../../Redux/Profile/actions/profileActions';
import Header from '../Browse/components/Header';
import { SingleItem } from '../Browse/SingleItem';
import axios from "axios";
import styles from "./myList.module.css"
import HomeFooter from '../../Components/HomeFooter';
import { useState } from 'react';


function MyList(props) {

    const {currentProfile} = useSelector(state=>state.profiles);
    const [blackHeader, setBlackHeader] = useState(false);

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
   
    const dispatch = useDispatch();
    const token = localStorage.getItem("token")
    const headers = {
           
        'Authorization': `bearer ${token}`
      }

    const handleLike = (showId)=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/profile/like/${showId}`,{},{
            params: {
             profileId:currentProfile._id
            },
            headers,
          }).then(res=>dispatch(setCurrentProfile(res.data.newProfile))).catch(err=>console.log(err))
    }

    const handleDislike = (showId)=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/profile/dislike/${showId}`,{},{
            params: {
             profileId:currentProfile._id
            },
            headers,
          }).then(res=>dispatch(setCurrentProfile(res.data.newProfile))).catch(err=>console.log(err))

    }

    const handleAddToList = (showId)=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/profile/addToList/${showId}`,{},{
            params: {
             profileId:currentProfile._id
            },
            headers,
          }).then(res=>dispatch(setCurrentProfile(res.data.newProfile))).catch(err=>console.log(err))
    }

    useEffect(()=>{

        if(!currentProfile){
            let token = localStorage.getItem("token")
            dispatch(getProfiles(token))
            dispatch(setCurrentProfile(JSON.parse(localStorage.getItem("currentProfile"))))
        }
    },[])

 

    return (
        <div className={styles.bgGrey} >
           <Header black={blackHeader} />
           <h2 className={styles.heading}>
               My List
           </h2>
            <div className={styles.list__container}>
                {
                    currentProfile?.myList.map((item,i)=> 
                    <SingleItem 
                    applyClass={styles.listItem}
                     key={item._id} 
                     handleAddToList={handleAddToList} 
                     item={item}
                     handleLike={handleLike} 
                     handleDislike={handleDislike} />)
                }
            </div>
            <HomeFooter />
        </div>
    );
}

export default MyList;
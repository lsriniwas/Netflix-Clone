import React from 'react'
import { useSelector } from 'react-redux'
import { SingleItem } from '../Browse/SingleItem'
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getProfiles, setCurrentProfile } from '../../Redux/Profile/actions/profileActions';
import axios from "axios";
import styles from "./Search.module.css"
import Loader from '../../Components/Loader/Loader';

export const Search = () => {
  const {searchResults:searchList,isLoading:searchLoading}=useSelector((state)=>state.search)
const {currentProfile} = useSelector(state=>state.profiles);


useEffect(()=>{
    window.scrollTo(0,0)
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


return !searchLoading?(
    <div className={styles.bgGrey} >
       <h2 className={styles.heading}>
          Search Results
       </h2>
        <div className={styles.list__container}>
            {
                searchList?.map((item,i)=> 
                <SingleItem
                applyClass={styles.listItem}
                 key={item._id} 
                 handleAddToList={handleAddToList} 
                 item={item}
                 handleLike={handleLike} 
                 handleDislike={handleDislike} />)
            }
        </div>
        
    </div>
):(
    <Loader />
)
}


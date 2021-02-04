import React from "react";
import styles from "./ShowMovies.module.css"
import { SingleItem } from "./SingleItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentProfile } from "../../Redux/Profile/actions/profileActions";

export const ShowMovies = ({items}) => {
    const {currentProfile} = useSelector(state=>state.profiles)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
   
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 4,
        cssEase: "linear"
    }

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


    return (
            <Slider {...settings} >
                {
                    items.map((item) => (
                        <SingleItem key={item._id} handleAddToList={handleAddToList} handleLike={handleLike} handleDislike={handleDislike} item = {item}/>
                    ))
                }
            </Slider>
    )
}
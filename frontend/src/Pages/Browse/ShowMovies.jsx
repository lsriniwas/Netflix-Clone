import React,{useEffect,useState} from "react";
import { SingleItem } from "./SingleItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentProfile } from "../../Redux/Profile/actions/profileActions";

export const ShowMovies = ({items,tile,isTvShow}) => {
    const {currentProfile} = useSelector(state=>state.profiles)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const {width} = windowDimensions;
  
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
    
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
   
    let settings = {
        dots: false,
        infinite: false,
        arrows:true,
        speed: 1000,
        
        slidesToShow: width > 900 ? 5 : width > 700 ? 3 :  width > 600 ? 2 : 2 ,
        slidesToScroll:  5,
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
        <>
          
            <Slider {...settings} >
                {
                    items.map((item) => (
                        <SingleItem isTvShow={isTvShow} key={item._id} handleAddToList={handleAddToList} handleLike={handleLike} handleDislike={handleDislike}  
                        item = {item}/>
                    ))
                }
            </Slider>
        </>
    )
}



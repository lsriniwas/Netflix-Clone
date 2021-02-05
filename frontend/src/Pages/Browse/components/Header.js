import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProfile } from "../../../Redux/Profile/actions/profileActions";
import {DebounceInput} from 'react-debounce-input';
import { makeGetSearchRequest } from "../../../Redux/Search/action";
import { Search } from "../../Search/Search";

export const Header = ({ black,search,setSearch }) => {
  const [searchBox, setSearchBox] = useState(false)
  const dispatch = useDispatch()

  const profiles = useSelector((state) => state.profiles.profile)
  const currentProf = useSelector((state) => state.profiles.currentProfile)

  const showProfiles = profiles.filter((item) => {
    return item._id !== currentProf._id
  })

  const [open, setOpen] = useState(false)

  const toggleSearchBox = () => {

   if(searchBox) {
     setSearchBox(false)
   }
   else {
     setSearchBox(true)
   }
}

const handleClick = (item, e) => {
  e.preventDefault()

  dispatch(setCurrentProfile(item))
}

const handleOpen= () => {
  open ? setOpen(false) : setOpen(true)
}

const Debouncer=(e)=>{
 
    dispatch(makeGetSearchRequest(e))
    console.log(search,"asdasd")
 
  
}

  return (
    <header className={black ? "black" : ""}>
      <div className = "nav-bar-bar">
        <div className="header--logo">
          <a href="/">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix"
            />
          </a>
        </div>
        <div className = "nav-bar-text-1">
          Home
        </div>
        <div className = "nav-bar-text">
          TV Shows
        </div>
        <div className = "nav-bar-text">
          Movies
        </div>
        <div className = "nav-bar-text">
          New & Popular
        </div>
        <div className = "nav-bar-text">
          My List
        </div>
        <div className = "search-bar-right">
        <div className={`${searchBox ? "searchBox" : "searchIcon"}`}>
                          <span className="icon" onClick={() => toggleSearchBox()}><FontAwesomeIcon color = "white" icon={faSearch} /></span>
                          {/* <input className="searchInput"
                              value={search}
                              onChange={(e) => setSearch(e.currentTarget.value)}
                              onBlur={() => setSearchBox(false)}
                              type="text" placeholder="Titles, People, Genres..." maxLength="80" /> */}
                           <DebounceInput 
                            className = "searchInput"
                              minLength={2}
                              value={search}
                              placeholder="Titles, People, Genres..."
                              onBlur={() => setSearchBox(false)}
                              debounceTimeout={1000}
                              onChange={(e)=>{
                                setSearch(e.target.value)
                                Debouncer(e.target.value)}}
                            />
              </div>
              <div className="header--user">
              <a>
                <img onClick = {handleOpen}
                  src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                  alt="Usuário"
                />
              </a>
            </div>
            {
              open && <div className = "modal-box-profiles">
              {
                showProfiles && showProfiles.map((item) => (
                  <div className = "each-profile-box">
                    <img src = {item.profilePic} alt = {item.name}/>
                    <div onClick = {(e) => handleClick(item, e)} className = "each-profile-name" > {item.name} </div>
                  </div>
                ))
              }
              <div className = "each-profile-box" > Manage Profiles </div>
              <div className = "profile-box-line"></div>
              <div className = "profile-text-bottom">Account</div>
              <div className = "profile-text-bottom">Help Center</div>
              <div className = "profile-text-bottom">Sign out of Netflix</div>
             </div>
            }
        </div>
      </div>
     <Search/> 
    </header>
  );
};

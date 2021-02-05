import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProfile } from "../../../Redux/Profile/actions/profileActions";
import { Link } from "react-router-dom";

function Header({ black }) {
  const [searchBox, setSearchBox] = useState(false);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const profiles = useSelector((state) => state.profiles.profile);
  const currentProf = useSelector((state) => state.profiles.currentProfile);

  const showProfiles = profiles.filter((item) => {
    return item._id !== currentProf._id;
  });

  const [open, setOpen] = useState(false);

  const toggleSearchBox = () => {
    if (searchBox) {
      setSearchBox(false);
    } else {
      setSearchBox(true);
    }
  };

  const handleClick = (item, e) => {
    e.preventDefault();

    dispatch(setCurrentProfile(item));
  };

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header className={black ? "black" : ""}>
      <div className="nav-bar-bar">
        <div className="header--logo">
          <Link href="/browse">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix"
            />
          </Link>
        </div>
        <Link to="/browse" className="nav-bar-text-1">
          Home
        </Link>
        <Link to="" className="nav-bar-text">
          TV Shows
        </Link>
        <Link to="" className="nav-bar-text">
          Movies
        </Link>
        <Link to="" className="nav-bar-text">
          New & Popular
        </Link>
        <Link to="/myList" className="nav-bar-text">
          My List
        </Link>
        <div className="search-bar-right">
          <div className={`${searchBox ? "searchBox" : "searchIcon"}`}>
            <span className="icon" onClick={() => toggleSearchBox()}>
              <FontAwesomeIcon color="white" icon={faSearch} />
            </span>
            <input
              className="searchInput"
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
              onBlur={() => setSearchBox(false)}
              type="text"
              placeholder="Titles, People, Genres..."
              maxLength="80"
            />
          </div>
          <div className="header--user">
            <img
              onClick={handleOpen}
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt="Usuário"
            />
          </div>
          {open && (
            <div className="modal-box-profiles">
              {showProfiles &&
                showProfiles.map((item) => (
                  <div className="each-profile-box">
                    <img src={item.profilePic} alt={item.name} />
                    <div
                      onClick={(e) => handleClick(item, e)}
                      className="each-profile-name"
                    >
                      {" "}
                      {item.name}{" "}
                    </div>
                  </div>
                ))}
              <div className="each-profile-box"> Manage Profiles </div>
              <div className="profile-box-line"></div>
              <div className="profile-text-bottom">Account</div>
              <div className="profile-text-bottom">Help Center</div>
              <div className="profile-text-bottom">Sign out of Netflix</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

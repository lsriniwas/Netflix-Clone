import React, { useState } from "react";
import "./Header.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProfile } from "../../../Redux/Profile/actions/profileActions";

import { DebounceInput } from "react-debounce-input";
import {
  getSearchSuccess,
  makeGetSearchRequest,
} from "../../../Redux/Search/action";
import { Search } from "../../Search/Search";

function Header({ black }) {
  const [searchBox, setSearchBox] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const profiles = useSelector((state) => state.profiles.profile);
  const currentProf = useSelector((state) => state.profiles.currentProfile);

  const params = useParams();

  const [search, setSearch] = useState(
    history.location.search.split("=")[1] || ""
  );
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const Debouncer = (e) => {
    if (e.length > 0) {
      dispatch(makeGetSearchRequest(e));
      history.push(`/browse?q=${e}`);
    } else {
      dispatch(makeGetSearchRequest(""));
      history.push(`/browse`);
    }
    setSearch(e);
  };
  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header className={black ? "black" : ""}>
      <div className="nav-bar-bar">
        <div className="header--logo">
          <Link to="/browse">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix"
            />
          </Link>
        </div>
        <Link
          to="/browse"
          onClick={() => dispatch(getSearchSuccess([]))}
          className="nav-bar-text-1"
        >
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
            <DebounceInput
              className="searchInput"
              minLength={2}
              value={search}
              placeholder="Titles, People, Genres..."
              onBlur={() => setSearchBox(false)}
              debounceTimeout={1000}
              onChange={(e) => {
                Debouncer(e.target.value);
              }}
            />
          </div>
          <div className="header--user">
            <a>
              <img
                onClick={handleOpen}
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Usuário"
              />
            </a>
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
              <div
                onClick={() => history.push("/profiles")}
                className="each-profile-box"
              >
                {" "}
                Manage Profiles{" "}
              </div>
              <div className="profile-box-line"></div>
              <div className="profile-text-bottom">Account</div>
              <div className="profile-text-bottom">Help Center</div>
              <div onClick={handleLogout} className="profile-text-bottom">
                Sign out of Netflix
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

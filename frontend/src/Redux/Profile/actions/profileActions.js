const {
  GET_PROFILES_REQ,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAIL,
  ADD_PROFILE_REQ,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_FAIL,
  CURRENT_PROFILE,
} = require("../actionTypes/profileActionTypes");
const axios = require("axios");

const getProfilesReq = () => {
  return {
    type: GET_PROFILES_REQ,
  };
};

const getProfilesSuccess = (profiles) => {
  return {
    type: GET_PROFILES_SUCCESS,
    payload: profiles,
  };
};

const getProfilesFail = (err) => {
  return {
    type: GET_PROFILES_FAIL,
    payload: err,
  };
};

export const getProfiles = (token) => (dispatch) => {
  dispatch(getProfilesReq());

  let config = {
    method: "get",
    url: "http://localhost:8000/api/auth/getProfiles",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  axios(config)
    .then((res) => dispatch(getProfilesSuccess(res.data.profiles)))
    .catch((err) => dispatch(getProfilesFail(err)));
};

const addProfileReq = () => {
  return {
    type: ADD_PROFILE_REQ,
  };
};

const addProfileSuccess = (data) => {
  return {
    type: ADD_PROFILE_SUCCESS,
    payload: data,
  };
};

const addProfileFail = (err) => {
  return {
    type: ADD_PROFILE_FAIL,
    payload: err,
  };
};

export const addProfile = ({ name, token }) => (dispatch) => {
  dispatch(addProfileReq());

  let config = {
    method: "post",
    url: "http://localhost:8000/api/auth/addProfile",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: { name: name },
  };

  axios(config)
    .then((res) => {
      dispatch(addProfileSuccess(res.data.newProfile));
    })
    .catch((err) => dispatch(addProfileFail(err)));
};

export const setCurrentProfile = (user) => {
  localStorage.setItem("currentProfile", JSON.stringify(user));
  return {
    type: CURRENT_PROFILE,
    payload: user,
  };
};

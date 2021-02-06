import axios from "axios";
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from "./actionTypes";

const getMoviesRequest = () => {
  return {
    type: GET_MOVIES_REQUEST,
  };
};

const getMoviesSuccess = (payload) => {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: payload,
  };
};

const getMoviesFailure = () => {
  return {
    type: GET_MOVIES_FAILURE,
  };
};

export const makeGetMoviesRequest = () => (dispatch) => {
  dispatch(getMoviesRequest());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/show`)
    .then((res) => dispatch(getMoviesSuccess(res.data)))
    .catch((err) => dispatch(getMoviesFailure()));
};

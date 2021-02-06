import axios from "axios";
import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE,
} from "./actionTypes";

const getSearchRequest = () => {
  return {
    type: GET_SEARCH_REQUEST,
  };
};

export const getSearchSuccess = (payload) => {
  return {
    type: GET_SEARCH_SUCCESS,
    payload: payload,
  };
};

const getSearchFailure = () => {
  return {
    type: GET_SEARCH_FAILURE,
  };
};

export const makeGetSearchRequest = (payload) => (dispatch) => {
  dispatch(getSearchRequest());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/search`, {
      params: {
        q: payload,
      },
    })
    .then((res) => {
      dispatch(getSearchSuccess(res.data));
    })
    .catch((err) => dispatch(getSearchFailure(err)));
};

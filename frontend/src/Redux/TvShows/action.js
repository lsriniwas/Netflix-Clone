import axios from "axios";
import {
  GET_SERIES_REQUEST,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILURE,
} from "./actionTypes";

const getSeriesRequest = () => {
  return {
    type: GET_SERIES_REQUEST,
  };
};

const getSeriesSuccess = (payload) => {
  return {
    type: GET_SERIES_SUCCESS,
    payload: payload,
  };
};

const getSeriesFailure = () => {
  return {
    type: GET_SERIES_FAILURE,
  };
};

export const makeGetSeriesRequest = () => (dispatch) => {
  console.log("called");
  dispatch(getSeriesRequest());

  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/tvshow`)
    .then((res) => dispatch(getSeriesSuccess(res.data)))
    .catch((err) => dispatch(getSeriesFailure()));
};

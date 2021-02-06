import {
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILURE,
  GET_SERIES_REQUEST,
} from "./actionTypes";

const initState = {
  series: [],

  isLoading: false,
  error: false,
  message: "",
};

export const seriesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SERIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SERIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        series: payload,
      };
    case GET_SERIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: "Oops !Try again later",
      };

    default:
      return state;
  }
};

import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
} from "./actionTypes";

const initState = {
  movies: [],

  isLoading: false,
  error: false,
  message: "",
};

export const moviesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: payload,
      };
    case GET_MOVIES_FAILURE:
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

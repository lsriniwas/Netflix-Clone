import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE
} from "./actionTypes";

const initState = {
  searchResults: [],
  isLoading: false,
  error: false,
  message: "",
};

export const searchReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: payload,
        isLoading: false,
      };
    case GET_SEARCH_FAILURE:
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

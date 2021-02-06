import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_ERROR_SUCCESS_RESET,
  LOGIN_SUCCESS,
} from "./actionConstants";

const initState = {
  isAuth: false,
  isLoading: false,
  error: false,
  success: false,
  message: "",
  user: {},
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        isAuth: true,
        isLoading: false,
        user: payload,
      };
    case LOGIN_ERROR_SUCCESS_RESET:
      return {
        ...state,
        error: false,
        success: false,
      };
    default:
      return state;
  }
};

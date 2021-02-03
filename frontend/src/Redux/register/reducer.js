import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: false,
  message: "",
};

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        error: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        message: payload.message,
        error: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false,
        message: payload.message,
        isAuth: false,
      };

    default:
      return state;
  }
};

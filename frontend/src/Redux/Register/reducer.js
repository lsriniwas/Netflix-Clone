import {
  REGISTER_RESET,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionConstants";

const initState = {
  isLoading: false,
  error: false,
  success: false,
  message: "",
};

export const registerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        message: payload,
      };
    case REGISTER_RESET: {
      return {
        ...state,
        error: false,
        success: false,
      };
    }
    default:
      return state;
  }
};

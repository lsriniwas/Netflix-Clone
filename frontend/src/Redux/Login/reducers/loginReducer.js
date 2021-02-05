import { LOGIN_SUCCESS } from "../actionTypes/loginActionTypes";

const initState = {
  user: {},
  loading: false,
  isAuth: false,
  error: false,
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuth: true,
      };

    default:
      return state;
  }
};

import { LOGIN_SUCCESS } from "../actionTypes/loginActionTypes";

export const fetchLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

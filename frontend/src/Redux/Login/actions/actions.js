import axios from "axios";
import * as actionConstants from "./actionConstants";

function loginRequest() {
  return {
    type: actionConstants.LOGIN_REQUEST,
  };
}

function loginSuccess(response) {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: response,
  };
}

function loginFailure(response) {
  return {
    type: actionConstants.LOGIN_FAILURE,
    payload: response,
  };
}

export function loginErrorSuccessReset() {
  return {
    type: actionConstants.LOGIN_ERROR_SUCCESS_RESET,
  };
}

export const makeLoginRequest = ({ email, password, history }) => (
  dispatch
) => {
  dispatch(loginRequest());

  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/login`, {
      email,
      password,
    })
    .then((res) => {
      saveTokenToLocalStorage(res.data);
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFailure(err.response.data.message));
    });
};

const saveTokenToLocalStorage = ({ token }) => {
  localStorage.setItem("token", token);
};

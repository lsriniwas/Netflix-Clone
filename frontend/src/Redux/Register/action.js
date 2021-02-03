import axios from "axios";
import * as actionConstants from "./actionConstants";

function registerRequest() {
  return {
    type: actionConstants.REGISTER_REQUEST,
  };
}

function registerSuccess(response) {
  return {
    type: actionConstants.REGISTER_SUCCESS,
    payload: response,
  };
}

function registerFailure(response) {
  return {
    type: actionConstants.REGISTER_FAILURE,
    payload: response,
  };
}

export const registerReset = () => {
  return {
    type: actionConstants.REGISTER_RESET,
  };
};

export const makeRegisterRequest = (customer) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/register`, customer)
    .then((res) => {
      dispatch(registerSuccess(res.data.message));
    })
    .catch((err) => {
      dispatch(registerFailure(err.response.data.message));
    });
};

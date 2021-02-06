import axios from "axios";
import { makeLoginRequest } from "../Login/actions/actions";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_RESET,
} from "./actionTypes";

const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const registerReset = () => {
  return {
    type: REGISTER_RESET,
  };
};

export const registerUser = (userDetails) => (dispatch) => {
  dispatch(registerRequest());

  const config = {
    url: "http://localhost:8000/api/register",
    method: "post",
    data: userDetails,
  };

  return axios(config)
    .then((res) => {
      dispatch(registerSuccess(res.data));
    })
    .catch((err) => {
      dispatch(registerFailure(err));
    });
};

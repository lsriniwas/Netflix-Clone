import axios from "axios";
import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
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

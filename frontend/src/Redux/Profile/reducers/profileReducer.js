import {
  GET_PROFILES_FAIL,
  GET_PROFILES_REQ,
  GET_PROFILES_SUCCESS,
  ADD_PROFILE_REQ,
  ADD_PROFILE_FAIL,
  ADD_PROFILE_SUCCESS,
  CURRENT_PROFILE,
} from "../actionTypes/profileActionTypes";

const initState = {
  profile: [],
  loading: false,
  error: false,
  currentProfile: null,
};

export const profileReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PROFILES_REQ:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_PROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
        error: false,
      };

    case GET_PROFILES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case ADD_PROFILE_REQ:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ADD_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        profile: [...state.profile, payload],
      };

    case ADD_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CURRENT_PROFILE:
      return {
        ...state,
        loading: false,
        error: false,
        currentProfile: payload,
      };

    default:
      return state;
  }
};

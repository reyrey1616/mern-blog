import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from './user.types';

export const loadUserStart = () => ({
  type: LOAD_USER_START,
});

export const loadUserSuccess = (payload) => ({
  type: LOAD_USER_SUCCESS,
  payload,
});

export const loadUserFail = (error) => ({
  type: LOAD_USER_FAIL,
  payload: error,
});

export const loginStart = (email, password) => ({
  type: LOGIN_START,
  payload: { email, password },
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const registerStart = (email, name, password) => ({
  type: REGISTER_START,
  payload: { email, name, password },
});

export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFail = (payload) => ({
  type: REGISTER_FAILURE,
  payload,
});

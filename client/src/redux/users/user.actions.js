import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './user.types';

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

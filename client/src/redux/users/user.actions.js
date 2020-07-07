import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './user.types';

export const addUser = (data) => {};

export const loginStart = (email, password) => {
  return {
    type: LOGIN_START,
    payload: { email, password },
  };
};

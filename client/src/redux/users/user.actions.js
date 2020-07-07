import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './user.types';

export const addUser = (data) => {};

export const loginStart = () => ({
  type: LOGIN_START,
});

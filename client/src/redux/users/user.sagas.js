import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './user.types';

export function* login() {}

export function* onSignUpStart() {
  yield takeLatest(LOGIN_START, login);
}
export function* userSagas() {
  yield all([call(onLoginStart)]);
}

import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './user.types';

import { loginStart } from './user.actions';

export function* login({ payload: { email, password } }) {
  try {
    // const config = {
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // };
    // const body = JSON.stringify({ email, password });
    // const res = yield axios.post('/api/auth/login', body, config);
    console.log('hahas');
    yield put(loginStart(email, password));
  } catch (error) {
    console.log(error);
  }
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_START, login);
}
export function* userSagas() {
  yield all([call(onLoginStart)]);
}

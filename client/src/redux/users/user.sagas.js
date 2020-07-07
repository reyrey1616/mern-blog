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

export function* login({ payload: { email, password } }) {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  const res = yield axios.post('/api/auth/login', body, config);

  console.log(res);
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_START, login);
}
export default function* userSagas() {
  yield all([call(onLoginStart)]);
}

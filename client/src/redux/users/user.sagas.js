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

import { loginStart, loginSuccess } from './user.actions';
import { setAlert } from '../alerts/alerts.actions';

export function* login({ payload: { email, password } }) {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const res = yield axios.post(
      'http://localhost:5000/api/auth/login',
      JSON.stringify({ email, password }),
      config
    );

    yield put(loginSuccess(res.data));
    yield put(setAlert('Login Success', 'success', 3000));
  } catch (error) {
    yield put(setAlert('Invalid Credentials', 'error', 3000));
  }
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_START, login);
}
export function* userSagas() {
  yield all([call(onLoginStart)]);
}

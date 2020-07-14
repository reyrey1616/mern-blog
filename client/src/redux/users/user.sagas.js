import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import { REGISTER_START, LOGIN_START } from './user.types';

import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFail,
} from './user.actions';
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

    console.log(res.data);

    yield put(loginSuccess(res.data));
    yield put(setAlert('Login Success', 'success', 3000));
  } catch (error) {
    yield put(setAlert('Invalid Credentials', 'error', 3000));
  }
}

export function* register({ payload: { name, email, password } }) {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const res = yield axios.post(
      'http://localhost:5000/api/auth/login',
      JSON.stringify({ name, email, password }),
      config
    );

    console.log(res.data);
    yield put(registerSuccess(res.data));
  } catch (error) {
    yield put(setAlert('Error on creating account', 'error', 3000));
    yield put(registerFail(error));
  }
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_START, login);
}

export function* onRegisterStart() {
  yield takeLatest(REGISTER_START, register);
}

export function* userSagas() {
  yield all([call(onLoginStart), call(onLoginStart)]);
}

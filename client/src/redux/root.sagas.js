import { all, call } from 'redux-saga/effects';
import { userSagas } from './users/user.sagas';

export default function* rootSaga() {
  yield all([call(userSagas)]);
}

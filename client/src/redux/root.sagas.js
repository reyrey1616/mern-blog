import { all, call } from 'redux-saga/effects';
import userSaga from './users/user.sagas';
export default function* rootSaga() {
  yield all([call(userSaga)]);
}

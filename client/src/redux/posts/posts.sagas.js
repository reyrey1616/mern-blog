import { takeLatest, put, call, all } from 'redux-saga/effects';
import { ADD_POST_START } from './posts.types';
import { addPostSuccess, addPostFail } from './posts.actions';
import axios from 'axios';

export function* addPost({ payload: content }) {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const res = yield axios.post(
      'http://localhost:5000/api/blogs',
      JSON.stringify({ content }),
      config
    );

    console.log(res.data.blog);
    yield put(addPostSuccess(res.data));
  } catch (error) {
    yield put(addPostFail(error));
  }
}
export function* onAddPost() {
  yield takeLatest(ADD_POST_START, addPost);
}
export function* postsSagas() {
  yield all([call(onAddPost)]);
}

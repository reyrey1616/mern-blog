import { takeLatest, put, call, all } from 'redux-saga/effects';
import { ADD_POST_START, GET_POST_START } from './posts.types';
import {
  addPostSuccess,
  addPostFail,
  getPostsSuccess,
  getPostsFail,
} from './posts.actions';
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

    yield put(addPostSuccess({ blogs: res.data.blogs, count: res.data.count }));
  } catch (error) {
    yield put(addPostFail(error));
  }
}

export function* getPosts() {
  try {
    const res = yield axios.get('http://localhost:5000/api/blogs');
    console.log(res);
    yield put(getPostsSuccess(res.data));
  } catch (error) {
    yield put(getPostsFail(error));
  }
}
export function* onAddPost() {
  yield takeLatest(ADD_POST_START, addPost);
}

export function* onGetPosts() {
  yield takeLatest(GET_POST_START, getPosts);
}
export function* postsSagas() {
  yield all([call(onAddPost), call(onGetPosts)]);
}

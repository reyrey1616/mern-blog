import {
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from './posts.types';

export const addPostStart = (content) => (dispatch) => {
  dispatch({
    type: ADD_POST_START,
    payload: content,
  });
};

export const addPostSuccess = (payload) => ({
  type: ADD_POST_SUCCESS,
  payload,
});

export const addPostFail = (error) => ({
  type: ADD_POST_FAIL,
  payload: error,
});

export const getPostsStart = () => ({
  type: GET_POST_START,
});

export const getPostsSuccess = (payload) => ({
  type: GET_POST_SUCCESS,
  payload,
});

export const getPostsFail = (error) => ({
  type: GET_POST_FAIL,
  payload: error,
});

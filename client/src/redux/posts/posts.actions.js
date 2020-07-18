import { ADD_POST_START, ADD_POST_SUCCESS, ADD_POST_FAIL } from './posts.types';

export const addPostStart = (payload) => ({
  type: ADD_POST_START,
  payload,
});

export const addPostSuccess = (payload) => ({
  type: ADD_POST_SUCCESS,
  payload,
});

export const addPostFail = (error) => ({
  type: ADD_POST_FAIL,
  payload: error,
});

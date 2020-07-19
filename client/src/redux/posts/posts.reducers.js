import {
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from './posts.types';
const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
  count: 0,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST_START:
    case GET_POST_START:
      return { ...state, loading: true };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, payload],
        count: state.count + 1,
        loading: false,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: payload.blogs,
        count: payload.count,
        loading: false,
      };
    case ADD_POST_FAIL:
    case GET_POST_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}

import { ADD_POST_START, ADD_POST_SUCCESS, ADD_POST_FAIL } from './posts.types';
const INITIAL_STATE = {
  posts: null,
  loading: false,
  error: null,
};

export default function (state = INITIAL_STATE, payload) {
  const { type, action } = payload;

  switch (type) {
    case ADD_POST_START:
      return { ...state, loading: true };
    case ADD_POST_SUCCESS:
      return { ...state, posts: payload, loading: false };

    case ADD_POST_FAIL:
      return { ...state, error: payload, loading: false };
  }
}

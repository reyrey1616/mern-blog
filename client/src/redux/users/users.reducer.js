import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from './user.types';

const INITIAL_STATE = {
  users: [],
  error: null,
  isAuthenticated: false,
  currentUser: {
    token: localStorage.getItem('token'),
    data: null,
  },
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_START:
    case REGISTER_START:
    case LOAD_USER_START:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case LOAD_USER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        currentUser: {
          data: payload.data,
          token: localStorage.getItem('token'),
        },
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case LOAD_USER_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}

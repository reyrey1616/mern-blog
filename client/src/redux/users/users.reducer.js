import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './user.types';

const INITIAL_STATE = {
  users: [],
  error: null,
  currentUser: null,
  loading: true,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_START:
    case REGISTER_START:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, users: payload, loading: false };
    case LOGIN_SUCCESS:
      return { ...state, currentUser: payload, loading: false };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}

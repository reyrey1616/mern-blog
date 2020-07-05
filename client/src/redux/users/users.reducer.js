import { REGISTER_USER, LOGIN_USER } from './user.types';

const INITIAL_STATE = {
  users: [],
  errors: [],
  currentUser: {},
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      return { ...state, users: payload };
    case LOGIN_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
}

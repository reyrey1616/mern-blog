import { SET_ALERT, REMOVE_ALERT } from './alerts.types';
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    default:
      return state;
  }
}

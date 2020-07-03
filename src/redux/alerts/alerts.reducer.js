import { SET_ALERT, REMOVE_ALERT } from './alerts.types';
const INITIAL_STATE = [
  {
    id: 1,
    type: 'error',
    msg: 'Nicesu',
  },
];

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((item) => payload !== item.id);
    default:
      return state;
  }
}

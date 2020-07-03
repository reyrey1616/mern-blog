import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './alerts.types';

export const setAlert = (msg, type, timeout) => (dispatch) => {
  const id = uuidv4();

  dispatch({
    type: SET_ALERT,
    payload: { id, msg, type },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, timeout);
};

import { combineReducers } from 'redux';
import alerts from './alerts/alerts.reducer';
import users from './users/users.reducer';

export default combineReducers({
  alerts,
  users,
});

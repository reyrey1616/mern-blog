import { combineReducers } from 'redux';
import alerts from './alerts/alerts.reducer';
import users from './users/users.reducer';
import posts from './posts/posts.reducers';

export default combineReducers({
  alerts,
  users,
  posts,
});

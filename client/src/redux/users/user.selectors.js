import { createSelector } from 'reselect';

const selectUser = (state) => state.users;

export const selectCurrentUser = createSelector(
  [selectUser],
  (users) => users.currentUser
);

export const selectAllUsers = createSelector(
  [selectUser],
  (users) => users.users
);

export const selectAuthenticated = createSelector(
  [selectUser],
  (users) => users.isAuthenticated
);

export const selectLoading = createSelector(
  [selectAllUsers],
  (users) => users.loading
);

export const selectUserReducer = createSelector([selectUser], (users) => users);

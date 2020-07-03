import { createSelector } from 'reselect';

const selectAlerts = (state) => state.alerts;

export const selectAllAlerts = createSelector(
  [selectAlerts],
  (alerts) => alerts
);

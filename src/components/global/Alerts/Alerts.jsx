import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Alert from '@material-ui/lab/Alert';
import { selectAllAlerts } from '../../../redux/alerts/alerts.selectors';
const Alerts = ({ alerts }) => {
  return (
    <div>
      {alerts.map(({ id, msg, type }) => (
        <Alert severity={type} key={id}>
          {msg}
        </Alert>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  alerts: selectAllAlerts,
});
export default connect(mapStateToProps)(Alerts);

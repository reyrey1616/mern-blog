import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect, Route } from 'react-router-dom';
import { selectUserReducer } from '../../../redux/users/user.selectors';

const PrivateRoute = ({
  component: Component,
  users: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = createStructuredSelector({
  users: selectUserReducer,
});

export default connect(mapStateToProps)(PrivateRoute);

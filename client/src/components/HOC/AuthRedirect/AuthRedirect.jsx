import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import {
  selectAuthenticated,
  selectCurrentUser,
} from '../../../redux/users/user.selectors';

const AuthRedirect = ({ childComponent, isAuthenticated, currentUser }) => {
  if (!isAuthenticated && currentUser.data) {
    return <Redirect to='/login' />;
  } else {
    return <Redirect to='/' />;
  }
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuthenticated,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AuthRedirect);

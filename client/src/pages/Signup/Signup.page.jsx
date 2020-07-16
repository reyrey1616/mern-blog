import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuthenticated } from '../../redux/users/user.selectors';
import { createStructuredSelector } from 'reselect';

const Signup = ({ isAuthenticated }) => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const classes = useStyles();

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div className={classes.root}>
      <SignupForm />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuthenticated,
});
export default connect(mapStateToProps)(Signup);

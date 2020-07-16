import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectAuthenticated } from '../../redux/users/user.selectors';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
const LoginPage = ({ isAuthenticated }) => {
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
      <LoginForm />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuthenticated,
});

export default connect(mapStateToProps)(LoginPage);

import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { makeStyles } from '@material-ui/core';
const LoginPage = () => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

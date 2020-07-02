import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import { makeStyles } from '@material-ui/core';
const Signup = () => {
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
      <SignupForm />
    </div>
  );
};

export default Signup;

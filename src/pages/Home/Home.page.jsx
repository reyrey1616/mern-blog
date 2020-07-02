import React from 'react';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogForm';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '1em',
  },
});
const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CreateBlogForm />
    </div>
  );
};

export default Homepage;

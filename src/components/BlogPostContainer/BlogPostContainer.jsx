import React from 'react';
import BlogPost from '../Blog/Blog';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '1em',
    height: '60vh',
    overflow: 'scroll',
  },
});

const BlogPostContainer = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.map((item) => (
        <BlogPost {...item} />
      ))}
    </div>
  );
};

export default BlogPostContainer;

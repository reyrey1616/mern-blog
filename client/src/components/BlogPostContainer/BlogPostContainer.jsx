import React from 'react';
import BlogPost from '../Blog/Blog';
import { makeStyles } from '@material-ui/core';

const BlogPostContainer = ({ data, isSignedIn }) => {
  const useStyles = makeStyles({
    root: {
      padding: '1em',
      height: isSignedIn ? '60vh' : 'auto',
      overflow: 'scroll',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.map((item) => (
        <BlogPost key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BlogPostContainer;

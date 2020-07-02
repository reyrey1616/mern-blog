import React from 'react';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogForm';
import BlogPost from '../../components/Blog/Blog';

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
      <BlogPost
        imageUrl='https://robohash.org/21'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt, eveniet est accusantium debitis ut praesentium! Doloremque, ut iusto minus pariatur aperiam error autem est provident laboriosam fuga vitae id.'
        name='Rey Guidoriagao Jr'
        dateTime='July 03, 2020 09:00:00 am'
        own={true}
      />
    </div>
  );
};

export default Homepage;

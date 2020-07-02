import React from 'react';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogForm';
import BlogPostContainer from '../../components/BlogPostContainer/BlogPostContainer';
import { makeStyles } from '@material-ui/core';

const data = [
  {
    id: 1,
    name: 'Lebron James',
    imageUrl: `https://robohash.org/94`,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt, eveniet est accusantium debitis ut praesentium! Doloremque, ut iusto minus pariatur aperiam error autem est provident laboriosam fuga vitae id.',
    dateTime: 'July 03, 2020 09:00:00 am',
  },
  {
    id: 2,
    name: 'Kevin Durant',
    imageUrl: `https://robohash.org/253`,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt, eveniet est accusantium debitis ut praesentium! Doloremque, ut iusto minus pariatur aperiam error autem est provident laboriosam fuga vitae id.',
    dateTime: 'July 03, 2020 09:00:00 am',
  },
  {
    id: 3,
    name: 'Stephen Curry',
    imageUrl: `https://robohash.org/22`,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt, eveniet est accusantium debitis ut praesentium! Doloremque, ut iusto minus pariatur aperiam error autem est provident laboriosam fuga vitae id.',
    dateTime: 'July 03, 2020 09:00:00 am',
  },
];

const useStyles = makeStyles({
  root: {
    padding: '1em',
  },
});
const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CreateBlogForm isSignedIn={false} />
      <BlogPostContainer data={data} isSignedIn={false} />
    </div>
  );
};

export default Homepage;

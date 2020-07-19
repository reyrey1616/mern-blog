import React, { useEffect } from 'react';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogForm';
import BlogPostContainer from '../../components/BlogPostContainer/BlogPostContainer';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllPosts } from '../../redux/posts/posts.selectors';
import { getPostsStart } from '../../redux/posts/posts.actions';
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
const Homepage = ({ getPosts, posts }) => {
  const classes = useStyles();

  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);
  return (
    <div className={classes.root}>
      <CreateBlogForm isSignedIn={true} />
      <BlogPostContainer data={data} isSignedIn={true} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectAllPosts,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPostsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

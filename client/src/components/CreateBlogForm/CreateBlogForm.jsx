import React, { useState } from 'react';
import {
  TextareaAutosize,
  FormControl,
  makeStyles,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alerts/alerts.actions';
import { addPostStart } from '../../redux/posts/posts.actions';

const useStyles = makeStyles({
  root: {
    padding: '1em',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  blogTextInput: {
    padding: '6px',
    fontSize: '16px',
    width: '100% !important',
    margin: '1em',
  },
});
const CreateBlogForm = ({ isSignedIn, setAlert, addPost }) => {
  const classes = useStyles();
  const [data, setData] = useState('');

  const onSubmit = () => {
    if (data.trim() === '') {
      setAlert('Please add a blog post', 'warning', 3000);
    } else {
      addPost(data);
    }
  };

  return isSignedIn ? (
    <FormControl margin='normal' className={classes.root}>
      <TextareaAutosize
        label='Required'
        className={classes.blogTextInput}
        value={data}
        rowsMin={5}
        placeholder='Add blog post here...'
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <Button
        type='button'
        onClick={onSubmit}
        variant='contained'
        color='primary'
      >
        Post
      </Button>
    </FormControl>
  ) : null;
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPostStart: (content) => dispatch(addPostStart()),
//   };
// };

export default connect(null, { setAlert, addPost: addPostStart })(
  CreateBlogForm
);

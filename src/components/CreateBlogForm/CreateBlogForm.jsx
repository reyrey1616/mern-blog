import React, { useState } from 'react';
import {
  TextareaAutosize,
  FormControl,
  makeStyles,
  Button,
} from '@material-ui/core';
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
const CreateBlogForm = () => {
  const classes = useStyles();
  const [data, setData] = useState('');

  const onSubmit = () => {
    console.log(data);
    alert('jahja');
  };

  return (
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
  );
};

export default CreateBlogForm;

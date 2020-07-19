import React, { useState } from 'react';
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const useStyles = makeStyles({
  root: {
    padding: '.5em !important',
    display: 'block',
    margin: '1em',
    border: '1px solid transparent',
    transition: 'all 0.3s',

    '&:hover': {
      cursor: 'pointer',
      border: '1px solid rgb(0, 102 , 204)',
    },
  },
  content: {
    padding: '.5em !important',
  },
});
const Blog = ({ name, date, content, avatar, own }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
      <CardHeader
        avatar={<Avatar alt={name} src={avatar} />}
        action={
          own && (
            <IconButton aria-label='settings' onClick={handleOpen}>
              <MoreVertOutlinedIcon aria-haspopup='true' />
            </IconButton>
          )
        }
        title={name}
        subheader={date}
      />
      <CardContent className={classes.content}>
        <Typography variant='body2' color='textSecondary' component='p'>
          {content}
        </Typography>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <ThumbUpAltOutlinedIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareOutlinedIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Blog;

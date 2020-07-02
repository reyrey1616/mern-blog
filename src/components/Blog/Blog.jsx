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
  },
});
const Blog = ({ name, dateTime, content, imageUrl, own }) => {
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
        avatar={<Avatar alt={name} src={imageUrl} />}
        action={
          own && (
            <IconButton aria-label='settings' onClick={handleOpen}>
              <MoreVertOutlinedIcon aria-haspopup='true' />
            </IconButton>
          )
        }
        title={name}
        subheader={dateTime}
      />
      <CardContent className={classes.root}>
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

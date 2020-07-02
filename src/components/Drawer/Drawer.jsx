import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer({ isOpen, setDrawer }) {
  const classes = useStyles();

  const toggleDrawer = (stat) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawer(stat);
  };

  return (
    <div>
      <Drawer onClose={toggleDrawer(false)} anchor='left' open={isOpen}>
        <div
          className={classes.list}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText primary='MERN Blog' />
            </ListItem>
          </List>
          <Divider />
          <List>
            {['Home', 'Login', 'Signup'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}{' '}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

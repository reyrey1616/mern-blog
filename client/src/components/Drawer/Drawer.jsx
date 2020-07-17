import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAuthenticated } from '../../redux/users/user.selectors';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function TemporaryDrawer({ isOpen, setDrawer, isAuthenticated }) {
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
            <NavLink to='/'>
              <ListItem button>
                <ListItemText primary='Home' />
              </ListItem>
            </NavLink>
            {!isAuthenticated && (
              <NavLink to='/login'>
                <ListItem button>
                  <ListItemText primary='Login' />
                </ListItem>
              </NavLink>
            )}
            {!isAuthenticated && (
              <NavLink to='/signup'>
                <ListItem button>
                  <ListItemText primary='Signup' />
                </ListItem>
              </NavLink>
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuthenticated,
});

export default connect(mapStateToProps)(TemporaryDrawer);

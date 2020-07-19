import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  MenuItem,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import TemporaryDrawer from '../Drawer/Drawer';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAuthenticated } from '../../redux/users/user.selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  flex: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  links: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const Navbar = ({ isAuthenticated }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mediumSize = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setOpen] = useState(false);

  const setDrawer = (stat) => {
    setOpen(stat);
  };
  return (
    <div className={classes.root}>
      <TemporaryDrawer isOpen={isOpen} setDrawer={setDrawer} />
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={mediumSize ? classes.menuButton : classes.hide}
            color='inherit'
            aria-label='menu'
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            MERN Blog
          </Typography>

          <div className={mediumSize ? classes.hide : classes.flex}>
            <NavLink to='/' className={classes.links}>
              <MenuItem>
                <ListItemText primary='Home' />
              </MenuItem>
            </NavLink>
            {!isAuthenticated && (
              <NavLink to='/login' className={classes.links}>
                <MenuItem>
                  <ListItemText primary='Login' />
                </MenuItem>
              </NavLink>
            )}
            {!isAuthenticated && (
              <NavLink to='/signup' className={classes.links}>
                <MenuItem>
                  <ListItemText primary='Signup' />
                </MenuItem>
              </NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuthenticated,
});

export default connect(mapStateToProps)(Navbar);

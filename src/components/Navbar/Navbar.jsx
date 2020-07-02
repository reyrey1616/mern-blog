import React from 'react';
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

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mediumSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={mediumSize ? classes.menuButton : classes.hide}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            MERN Blog
          </Typography>

          <div className={mediumSize ? classes.hide : classes.flex}>
            <NavLink to='/' className={classes.links}>
              <MenuItem>
                <ListItemText primary='Login' />
              </MenuItem>
            </NavLink>
            <NavLink to='/' className={classes.links}>
              <MenuItem>
                <ListItemText primary='Login' />
              </MenuItem>
            </NavLink>
            <NavLink to='/' className={classes.links}>
              <MenuItem>
                <ListItemText primary='Login' />
              </MenuItem>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

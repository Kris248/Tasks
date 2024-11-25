import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
  navbar: {
    marginBottom: theme.spacing(2),
  },
  navbarTitle: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  navbarLink: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: theme.spacing(1),
    padding: '8px 12px',
    border: '2px solid transparent',
    transition: 'border-color 0.3s, transform 0.3s',
    '&:hover': {
      color: "black",
      borderColor: theme.palette.primary.main,
      transform: 'translateY(-5px)',
    }
  },
  '@keyframes bounce': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.navbarTitle}>
          Task Manager
        </Typography>
        <Link
          to="/"
          className={`${classes.navbarLink} ${activeLink === '/' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/')}
        >
          Home
        </Link>
        <Link
          to="/login"
          className={`${classes.navbarLink} ${activeLink === '/login' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/login')}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={`${classes.navbarLink} ${activeLink === '/signup' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/signup')}
        >
          Signup
        </Link>
        <Link
          to="/logout"
          className={`${classes.navbarLink} ${activeLink === '/logout' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/logout')}
        >
          Logout
        </Link>
        <Link
          to="/admin"
          className={`${classes.navbarLink} ${activeLink === '/admin' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/admin')}
        >
          Admin Panel
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import authStore from '../stores/authStore';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: 400,
    padding: theme.spacing(2),
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: theme.spacing(1),
    backgroundColor: '#fff',
  },
  formTitle: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
}));

const SignupForm = () => {
  const classes = useStyles();
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate('/login');
  };

  return (
    <Container className={classes.container} maxWidth="sm" align="center">
      <div className={classes.formContainer}>
        <Typography variant="h6" className={classes.formTitle}>
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            className={classes.formField}
            label="Email"
            variant="outlined"
            onChange={store.updateSignupForm}
            value={store.signupForm.email}
            name="email"
            required
            fullWidth
          />
          <TextField
            className={classes.formField}
            label="Password"
            variant="outlined"
            onChange={store.updateSignupForm}
            value={store.signupForm.password}
            name="password"
            type="password"
            required
            fullWidth
          />
          <Button
            className={classes.formButton}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Signup
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignupForm;

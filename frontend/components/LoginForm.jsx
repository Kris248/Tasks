import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  form: {
    width: 300,
    padding: theme.spacing(2),
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: theme.spacing(1),
    backgroundColor: "#fff",
  },
  formTitle: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate("/");
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleLogin}>
        <Typography variant="h6" className={classes.formTitle}>
          Login
        </Typography>
        <TextField
          className={classes.formField}
          label="Email"
          variant="outlined"
          onChange={store.updateLoginForm}
          value={store.loginForm.email}
          name="email"
          type="email"
          required
          fullWidth
        />
        <TextField
          className={classes.formField}
          label="Password"
          variant="outlined"
          onChange={store.updateLoginForm}
          value={store.loginForm.password}
          name="password"
          type="password"
          required
          fullWidth
        />
        <Button
          className={classes.formButton}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const store = authStore();
    const navigate = useNavigate();


    const handleLogin = async(e) => {
        e.preventDefault();
        await store.login();
        // if pass the credentials then redirect
        navigate("/");

    }
  return (
    <div>
      <form onSubmit={handleLogin} >
        Email:{" "}
        <input
          onChange={store.updateLoginForm}
          type="email"
          value={store.loginForm.email}
          name="email"
          required
        />
        Password:{" "}
        <input
          onChange={store.updateLoginForm}
          type="password"
          value={store.loginForm.password}
          name="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

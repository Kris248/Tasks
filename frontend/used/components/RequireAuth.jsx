// This file written to check if the user already logged in or not and if not logged in then it open login page else it directly open the tasks page.

import { useEffect } from "react";
import authStore from "../stores/authStore";
import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if(store.loggedIn === null){
    return <div>Loading...</div>
  }

  //check if user is not loggedIn.
  if (store.loggedIn === false) {
    return <Navigate to="/login" />
  }

  // if the user is loggedIn then automatically open the TasksPage by wrapping TasksPage comp. in App.jsx
  return <div>{props.children}</div>;
};

export default RequireAuth;
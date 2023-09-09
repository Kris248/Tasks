import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: "",
    password: "",
  },

  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  login: async () => {
    const { loginForm } = authStore.getState();

    const res = await axios.post("/login", loginForm);
    console.log("loginForm: ", res);
    // if found correct credentials then...
    set({
      loggedIn: true,
      loginForm: {
        email: "",
        password: "",
      },
    });
  },

  signup: async () => {
    const { signupForm } = authStore.getState();
    const res = await axios.post("/signup", signupForm);
    set({
      signupForm: {
        email: "",
        password: "",
      },
    });
    console.log("SignupAuth: ",res);
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },
  
  logout: async () => {
    const res = await axios.get("/logout");
    set({loggedIn: false});
    console.log(res);
  }
}));

export default authStore;

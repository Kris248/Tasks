import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";

const SignupForm = () => {
  const store = authStore();
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/login");
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
        Email:{" "}
        <input
          onChange={store.updateSignupForm}
          type="email"
          value={store.signupForm.email}
          name="email"
          required
        />
        Password:{" "}
        <input
          onChange={store.updateSignupForm}
          type="password"
          value={store.signupForm.password}
          name="password"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;

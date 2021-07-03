import "./signup.css";
import { Link } from "react-router-dom";

export default function SignUP() {
  return (
    <div className="register">
      <span className="registerTitle">Sign Up</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}

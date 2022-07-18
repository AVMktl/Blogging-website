import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div className="register">
      <div className="register-container">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
      </div>
    </div>
  );
};

export default Register;

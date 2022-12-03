import React, { useState } from "react";
import "./SignUp.css";
import { signup } from "../utilis/signup";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSignUp = () => {
    console.log("sign up");
    signup({ username, password })
      .then((res) => {
        console.log(res.data);
        setUsername("");
        setPassword("");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <button className="signup" onClick={handleSignUp}>
        Sign up
      </button>
    </form>
  );
};

export default SignUp;

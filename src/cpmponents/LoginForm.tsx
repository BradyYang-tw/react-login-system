import React from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import Google from "../static/Google.svg";
import Facebook from "../static/Facebook.svg";
import github from "../static/github.svg";
import Twitter from "../static/Twitter.svg";

const LoginForm = () => {
  const loginClick = () => {
    console.log("button click");
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form className="login-form" action="" onSubmit={submitHandler}>
      <h3>Login</h3>
      <div className="form-input-group">
        <label htmlFor="account-username" className="form-label">
          Username
        </label>
        <input
          id="account-username"
          className="form-input"
          type="text"
          placeholder="Type your username"
        />
      </div>
      <div className="form-input-group ">
        <label htmlFor="account-password" className="form-label">
          Password
        </label>
        <input
          id="account-password"
          className="form-input"
          type="password"
          placeholder="Type your password"
        />
      </div>

      <a className="forget-password" href="#">
        Forget password
      </a>

      <button className="form-login-button" onClick={loginClick}>
        Login
      </button>

      <p className="password-hint">or Sign Up Using</p>

      <div className="third-login">
        <img className="third-icon" src={Google} alt="" onClick={loginClick} />

        <img
          className="third-icon"
          src={Facebook}
          alt=""
          onClick={loginClick}
        />
        <img className="third-icon" src={Twitter} alt="" onClick={loginClick} />
        <img className="third-icon" src={github} alt="" onClick={loginClick} />
      </div>

      <p className="password-hint">or Sign Up Using</p>

      <a className="signup" href="#">
        SIGN UP
      </a>
    </form>
  );
};

export default LoginForm;

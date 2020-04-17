import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => (
  <div className="login-form">
    <h1 className="dark">Login</h1>
    <div>
      <h3 className="dark">Email:</h3>
      <input type="email" name="" id="" placeholder="john_doe@genre.io" />
    </div>
    <div>
      <h3 className="dark">Password:</h3>
      <input type="password" name="" id="" />
    </div>
    <div className="signup-nav">
      <h4 className="user-conf">Not yet a user?&nbsp;</h4>
      <Link to="/signup" className="signup link dark">
        <h4>Signup</h4>
      </Link>
    </div>
    <style jsx>
      {`
        .login-form {
          background-color: #f5f1d0;
          width: 38%;
          margin: 0 auto;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .user-conf {
          opacity: 0.7;
        }
        input {
          width: 15rem;
          height: 3rem;
          border: none;
          border-radius: 5px;
          padding-left: 1rem;
          background-color: rgba(7, 26, 36);
          color: #f5f1d0;
          font-weight: bold;
          font-size: 0.9rem;
        }
        input:focus {
          outline: none;
        }
        .signup-nav {
          display: flex;
        }
        h1,
        .light {
          color: #f5f1d0;
        }
        .dark {
          color: #071a24;
        }
        .link {
          text-decoration: none;
          font-weight: bold;
        }
        .signup:hover {
          text-decoration: underline;
        }
      `}
    </style>
  </div>
);

export default LoginForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    isValid: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("USER INFO ", userInfo);
    axios
      .post("/api/users/login", {
        username: userInfo.username,
        password: userInfo.password,
      })
      .then((res) => {
        console.log("LOGIN RES ", res.data);
        if (res.status === 200) {
          props.updateUser({
            isLoggedIn: true,
            user: res.data,
          });
        }
        props.history.push("/");
      })
      .catch((e) => {
        console.log("Login error");
        console.log(e);
      });
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
      isValid: isValid(),
    });
  };

  const isValid = () => {
    if (userInfo.username && userInfo.password) {
      return true;
    }
    return false;
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1 className="dark">Login</h1>
        <div>
          <h3 className="dark">username</h3>
          <input
            type="text"
            name="username"
            placeholder="john_doe"
            onChange={handleChange}
            value={userInfo.username}
          />
        </div>
        <div>
          <h3 className="dark">Password:</h3>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={userInfo.password}
          />
        </div>
        <div className="submit-btn">
          <input
            type="submit"
            value="LOGIN"
            style={{ opacity: !userInfo.isValid && "0.5" }}
            disabled={!userInfo.isValid}
          />
        </div>
      </form>
      <div className="signup-nav">
        <h4 className="user-conf">Not yet a user?&nbsp;</h4>
        <Link to="/signup" className="signup link dark">
          <h4>Signup</h4>
        </Link>
      </div>
      <style jsx global>
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
          .submit-btn {
            text-align: center;
            margin-top: 2rem;
          }
          .submit-btn > input {
            background-color: #071a24;
          }
          .submit-btn > input:hover {
            background-color: #071a24;
            color: #f5f1d0;
            cursor: pointer;
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
};

export default LoginForm;

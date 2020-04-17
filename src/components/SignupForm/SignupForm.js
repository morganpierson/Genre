import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SignupForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    password: "",
    isValid: false,
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
      isValid: isValid(),
    });
  };

  const isValid = () => {
    if (userInfo.email && userInfo.username && userInfo.password) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/signup", {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
      })
      .then((res) => {
        console.log("RES ", res);
        if (res.data) {
          console.log("Successful signup");
          props.history.push("/login");
        } else {
          console.log("Signup error");
        }
      })
      .catch((err) => {
        console.log("Signup server error ", err.response);
      });
  };

  return (
    <div className="login-form">
      <h1 className="dark">Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <h3 className="dark">Email:</h3>
          </label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="john_doe@genre.io"
            style={{
              backgroundColor: userInfo.email ? "#f2f4f3" : "#f5f1d0",
            }}
          />
        </div>
        <div>
          <label>
            <h3 className="dark">Username:</h3>
          </label>
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
            placeholder="newuser1212"
            style={{
              backgroundColor: userInfo.username ? "#f2f4f3" : "#f5f1d0",
            }}
          />
        </div>
        <div>
          <label>
            <h3 className="dark">Password:</h3>
          </label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            style={{
              backgroundColor: userInfo.password ? "#f2f4f3" : "#f5f1d0",
            }}
          />
        </div>
        <div className="submit-btn">
          <input
            type="submit"
            value="SIGNUP"
            style={{ opacity: !userInfo.isValid && "0.5" }}
            disabled={!userInfo.isValid}
          />
        </div>
      </form>
      <div className="signup-nav">
        <h4 className="user-conf">Already a member?&nbsp;</h4>
        <Link to="/login" className="signup link dark">
          <h4>Login</h4>
        </Link>
      </div>
      <style jsx>
        {`
          .login-form {
            background-color: #91cff0;
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
            background-color: #f5f1d0;
            font-weight: bold;
            font-size: 0.9rem;
          }
          input:focus {
            outline: none;
          }
          .submit-btn {
            text-align: center;
            margin-top: 2rem;
          }
          .submit-btn > input {
            background-color: #f2f4f3;
          }
          .submit-btn > input:hover {
            background-color: #071a24;
            color: #f5f1d0;
            cursor: pointer;
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
};

export default SignupForm;

import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log("HEADER USER ", props.user);
  const nav = props.user.isLoggedIn ? (
    <Link to="/account" className="link">
      MY ACCOUNT
    </Link>
  ) : (
    <Link to="/login" className="link">
      LOGIN
    </Link>
  );
  return (
    <div className="header-container">
      <Link to="/" className="link logo">
        <h1>G E N R E</h1>
      </Link>
      <input type="text" placeholder="Search music, photography, poetry..." />

      {nav}
      <style jsx>
        {`
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
          }
          h1,
          .link {
            color: #f5f1d0;
          }
          .link {
            text-decoration: none;
            font-weight: bold;
          }
          .header-container:first-child > input {
            margin: auto;
          }
          .link:hover {
            text-decoration: underline;
          }
          input {
            width: 20rem;
            height: 3rem;
            border-radius: 5px;
            border: none;
            background-color: rgba(245, 241, 208, 0.8);
            font-size: 1rem;
            text-align: center;
          }

          ::-webkit-input-placeholder {
            color: rgb(7, 26, 36);
          }
          input:focus {
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default Header;

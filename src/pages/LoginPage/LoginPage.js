import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (props) => (
  <>
    <Link to="/" className="link light">
      <h1>G E N R E</h1>
    </Link>
    <LoginForm history={props.history} updateUser={props.updateUser} />
  </>
);

export default LoginPage;

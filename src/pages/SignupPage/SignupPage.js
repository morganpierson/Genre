import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import { Link } from "react-router-dom";

const SignupPage = (props) => (
  <>
    <Link to="/" className="link light">
      <h1>G E N R E</h1>
    </Link>
    <SignupForm history={props.history} />
  </>
);

export default SignupPage;

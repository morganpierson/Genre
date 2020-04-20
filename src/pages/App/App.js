//Libraries and Modules
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Components & Pages
import axios from "axios";
import HomePage from "../Home/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import UserAccountPage from "../UserAccountPage/UserAccountPage";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    user: null,
    isLoggedIn: false,
  });
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("/api/users/").then((response) => {
        if (response.data.user) {
          console.log("THERE IS A USER");
          setUserInfo({
            user: response.data.user,
            isLoggedIn: true,
          });
        } else {
          console.log("NO USER");
          setUserInfo({
            user: null,
            isLoggedIn: false,
          });
        }
      });
    };
    fetchData();
  }, [userInfo.isLoggedIn]);

  const updateUser = (user) => {
    setUserInfo(user);
  };

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <HomePage
              user={userInfo}
              history={history}
              updateUser={updateUser}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage updateUser={updateUser} history={history} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage updateUser={updateUser} history={history} />
          )}
        />
        <Route
          exact
          path="/account"
          render={({ history }) =>
            userInfo.isLoggedIn ? (
              <UserAccountPage user={userInfo.user} history={history} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>

      <style jsx>
        {`
          .featured-cards-container {
            display: flex;
            flex-wrap: wrap;
            width: 90%;
            text-align: center;
            margin: 0 auto;
            justify-content: space-around;
          }
        `}
      </style>
    </>
  );
};

export default App;

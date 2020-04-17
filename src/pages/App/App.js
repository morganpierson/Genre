//Libraries and Modules
import React from "react";
import { Switch, Route } from "react-router-dom";
//Components & Pages
import HomePage from "../Home/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

const cards = [
  {
    title: "User_1",
    content:
      "User 1 information. They are a mixed media artist with a focus in painting and photography",
  },
  {
    title: "User_2",
    content:
      "User 2 information. They are a musical artist who uses found sounds to create unique sonic experiences",
  },
  {
    title: "User_3",
    content:
      "User 3 information. They are a spoken word artist who has traveled the world performing at TED talks and concert halls.",
  },
  {
    title: "User_4",
    content: "User 4 information. They are a traveling adventure photographer.",
  },
];

const App = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => <HomePage history={history} />}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => <LoginPage history={history} />}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => <SignupPage history={history} />}
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

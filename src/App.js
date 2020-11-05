import React from "react";
import { Global, css } from "@emotion/core";
import { render } from "react-dom";
import { navigate } from "@reach/router";

import ControlPanel from "./views/ControlPanel";
import Details from "./views/Details";
import Login from "./views/Login";
import TransitionRouter from "./components/TransitionRouter";

import DataContextProvider from "./contexts/DataContext";
import FadeContextProvider from "./contexts/FadeContext";

const App = () => {
  function noLoginRedirect() {
    if (localStorage.getItem("loggedIn") != "true") {
      navigate("/login");
    }
  }
  noLoginRedirect();

  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #0a4da2;
            font-family: Montserrat, sans-serif;
          }
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
        `}
      />
      <FadeContextProvider>
        <DataContextProvider>
          <TransitionRouter>
            <ControlPanel path="/" />
            <Details path="/details/:id" />
            <Login path="/login" />
          </TransitionRouter>
        </DataContextProvider>
      </FadeContextProvider>
    </>
  );
};

render(<App />, document.querySelector("#root"));

import { initializeApp } from "@firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { firebaseConfig } from "./auth/firebase.config";
import _404 from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./resources/css/index.css";

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/" exact>
          <Redirect to={"/dashboard"} />
        </Route>
        <Route path="/" component={_404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

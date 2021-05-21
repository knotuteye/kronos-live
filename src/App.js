import firebase from "firebase/app";
import "firebase/auth";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import _404 from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
  function onUserAuthChange() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) console.log("Logged In: " + user.email);
      else {
        console.log("Logged Out");
      }
    });
  }

  useEffect(onUserAuthChange, []);

  return (
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
  );
}

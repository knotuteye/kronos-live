import firebase from "firebase/app";
import "firebase/auth";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import _404 from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export const UserContext = React.createContext({ dirty: true });

export default function App() {
  const [user, setUser] = useState({ dirty: true });

  function onUserAuthChange() {
    firebase.auth().onAuthStateChanged((userCredential) => {
      if (userCredential) {
        setUser({ ...userCredential, dirty: false });
      } else {
        setUser({ dirty: false });
      }
    });
  }

  useEffect(onUserAuthChange, []);

  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  );
}

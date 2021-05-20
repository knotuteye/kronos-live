import { initializeApp } from "@firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { firebaseConfig } from "./auth/firebase.config";
import Login from "./pages/Login";
import "./resources/css/index.css";

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Login></Login>
  </React.StrictMode>,
  document.getElementById("root")
);

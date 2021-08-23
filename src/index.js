import firebase from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebaseConfig } from "./auth/firebase.config.js";
import "./resources/css/index.css";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

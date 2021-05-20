import { FirebaseAuthProvider } from "@react-firebase/auth";
import "firebase/auth";
import React from "react";
import ReactDOM from "react-dom";
import { firebaseConfig } from "./auth/firebase.config";
import Login from "./pages/Login";
import "./resources/css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthProvider {...firebaseConfig}>
      <Login></Login>
    </FirebaseAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

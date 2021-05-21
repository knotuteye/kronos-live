import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { getCurrentUser, logOut } from "../../auth";

export default function Dashboard() {
  let history = useHistory();

  function checkIfUserIsLoggedIn() {
    getCurrentUser().then((user) => {
      console.log(user);
      if (!user) {
        history.replace("/login");
      }
    });
  }

  function _logOutUser() {
    logOut().then((e) => {
      history.replace("/login");
    });
  }

  useEffect(checkIfUserIsLoggedIn, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={_logOutUser} className="bg-green-500">
        Log Out
      </button>
    </div>
  );
}

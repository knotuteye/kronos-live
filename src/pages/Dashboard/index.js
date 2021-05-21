import React from "react";
import { useHistory } from "react-router";
import { logOut } from "../../auth";

export default function Dashboard() {
  let history = useHistory();

  function _logOut() {
    logOut().then((_) => history.replace("/login"));
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={_logOut} className="bg-green-500">
        Log Out
      </button>
    </div>
  );
}

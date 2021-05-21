import React from "react";
import { useHistory } from "react-router";
import { logOut } from "../../auth";

export default function Dashboard() {
  let history = useHistory();
  function _logOutUser() {
    logOut();
    history.replace("/login");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={_logOutUser} className="bg-green-500">
        Log Out
      </button>
    </div>
  );
}

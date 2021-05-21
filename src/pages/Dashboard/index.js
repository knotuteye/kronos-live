import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import { logOut } from "../../auth";

export default function Dashboard() {
  const history = useHistory();
  const user = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  function _logOut() {
    logOut().then((_) => history.push("/login"));
  }

  function listenForUser() {
    if (!user.dirty && user.dirty !== undefined) {
      console.log("User is clean");
      if (user.uid) setLoading(false);
      if (!user.uid) history.push("/login");
    } else {
      console.log("User is dirty");
      setLoading(true);
    }
  }

  useEffect(listenForUser, [user.dirty]);

  return loading ? (
    <div>Loading Dashboard...</div>
  ) : (
    <div>
      <h1>Dashboard</h1>
      <div>{user.email}</div>
      <button onClick={_logOut} className="bg-green-500">
        Log Out
      </button>
    </div>
  );
}

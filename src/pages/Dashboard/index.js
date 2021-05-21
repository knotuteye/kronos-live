import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import { logOut } from "../../auth";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  const history = useHistory();
  const user = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  function _logOut() {
    logOut().then((_) => history.push("/login"));
  }

  function listenForUser() {
    if (!user.dirty && user.dirty !== undefined) {
      if (user.uid) setLoading(false);
      if (!user.uid) history.push("/login");
    } else {
      setLoading(true);
    }
  }

  useEffect(listenForUser, [user, history]);

  return loading ? (
    <div>Loading Dashboard...</div>
  ) : (
    <div className="bg-gray-200 h-screen w-screen">
      <Sidebar
        menuMapArray={[
          { name: "Overview", icon: "", path: "#" },
          { name: "Lecturers", icon: "", path: "#lecturers" },
          { name: "Courses", icon: "", path: "#courses" },
          { name: "Student Groups", icon: "", path: "#groups" },
          { name: "Settings", icon: "", path: "#settings" },
          { name: "Feedback", icon: "", path: "#feedback" },
        ]}
      ></Sidebar>
      <button onClick={_logOut} className="bg-green-500">
        Log Out
      </button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { FetchActivities } from "../../../api";
import Table from "../../../components/Table";

export default function Activities() {
  const [activities, setActivities] = useState([]);

  function initActivities() {
    FetchActivities()
      .then((activities) => {
        let activityArray = [];
        for (const key in activities) {
          activityArray[key] = activities[key];
        }
        setActivities(activityArray);
      })
      .catch((err) => console.error(err));
  }

  useEffect(initActivities, []);

  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Activities</h1>
      <Table
        data={activities}
        headers={["ID", "Name", "Duration", "Participants"]}
      ></Table>
    </div>
  );
}

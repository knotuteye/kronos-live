import React, { useState } from "react";
import ImportCSVSection from "../../components/ImportCSVSection";
import SectionHeaderBar from "../../components/SectionHeaderBar";
import Table from "../../components/Table";

export default function Activities() {
  const [activities, setActivities] = useState(
    JSON.parse(window.localStorage.getItem("activities")) || []
  );

  function persistActivityData(activityData) {
    setActivities(activityData);
    window.localStorage.setItem("activities", JSON.stringify(activityData));
  }

  function clearActivityData() {
    setActivities([]);
    window.localStorage.removeItem("activities");
  }

  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto h-full">
      {/* <h1 className="text-gray-500 font-bold text-2xl ml-1">Activities</h1> */}
      <SectionHeaderBar
        heading="Activities"
        onImport={persistActivityData}
        onDelete={clearActivityData}
      ></SectionHeaderBar>
      {activities.length ? (
        <Table
          data={activities}
          headers={["No.", "ID", "Name", "Type", "Duration", "Participants"]}
          columns={["ID", "name", "type", "duration", "participants"]}
        ></Table>
      ) : (
        <ImportCSVSection onImport={persistActivityData}></ImportCSVSection>
      )}
    </div>
  );
}

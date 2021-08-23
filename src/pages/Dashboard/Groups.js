import React, { useEffect, useState } from "react";
import ImportCSVSection from "../../components/ImportCSVSection";
import Table from "../../components/Table";

export default function Groups() {
  const [groups, setGroups] = useState(
    JSON.parse(window.localStorage.getItem("groups")) || []
  );

  function initGroups() {}

  useEffect(initGroups, []);

  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto h-full">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Student Groups</h1>
      {groups.length ? (
        <Table data={groups} headers={["ID", "Name", "Number", "Year"]}></Table>
      ) : (
        <ImportCSVSection
          onImport={(groupData) => {
            setGroups(groupData);
            window.localStorage.setItem("groups", JSON.stringify(groupData));
          }}
        ></ImportCSVSection>
      )}
    </div>
  );
}

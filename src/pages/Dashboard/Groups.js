import React, { useEffect, useState } from "react";
import { FetchGroups } from "../../api";
import ImportCSVButton from "../../components/ImportCSVButton";
import Table from "../../components/Table";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  function initGroups() {
    FetchGroups()
      .then((groups) => {
        let groupArray = [];
        for (const key in groups) {
          groupArray[key] = groups[key];
        }
        setGroups(groupArray);
      })
      .catch((err) => console.error(err));
  }

  useEffect(initGroups, []);

  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto h-full">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Groups</h1>
      {groups.length ? <Table data={groups} headers={["ID", "Name", "Number", "Year"]}></Table> :
        <div className="flex justify-center items-center h-full">
          <ImportCSVButton></ImportCSVButton>
        </div>}

    </div>
  );
}

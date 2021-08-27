import React, { useState } from "react";
import ImportCSVSection from "../../components/ImportCSVSection";
import SectionHeaderBar from "../../components/SectionHeaderBar";
import Table from "../../components/Table";

export default function Groups() {
  const [groups, setGroups] = useState(
    JSON.parse(window.localStorage.getItem("groups")) || []
  );

  function persistGroupData(groupData) {
    setGroups(groupData);
    window.localStorage.setItem("groups", JSON.stringify(groupData));
  }

  function deleteGroupData() {
    setGroups([]);
    window.localStorage.removeItem("groups");
  }

  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto h-full">
      <SectionHeaderBar
        heading="Student Groups"
        onDelete={deleteGroupData}
        onImport={persistGroupData}
      ></SectionHeaderBar>

      {groups.length ? (
        <Table
          data={groups}
          headers={["No.", "ID", "Name", "Number Of Students", "Year"]}
          columns={["ID", "name", "number_of_students", "year"]}
        ></Table>
      ) : (
        <ImportCSVSection onImport={persistGroupData}></ImportCSVSection>
      )}
    </div>
  );
}

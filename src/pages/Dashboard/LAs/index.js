import React, { useEffect, useState } from "react";
import { FetchLAs } from "../../../api";
import Table from "../../../components/Table";

export default function LabAssistants() {
  const [labAssistants, setLabAssistants] = useState([]);

  function initLabAssistants() {
    FetchLAs()
      .then((LAs) => {
        let labAssistantsArray = [];
        for (const key in LAs) {
          labAssistantsArray[key] = LAs[key];
        }
        setLabAssistants(labAssistantsArray);
      })
      .catch((err) => console.error(err));
  }

  useEffect(initLabAssistants, []);
  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Lab Assistants</h1>
      <Table data={labAssistants} headers={["No.", "ID", "Name"]}></Table>
    </div>
  );
}

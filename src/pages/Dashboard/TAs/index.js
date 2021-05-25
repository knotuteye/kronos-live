import React, { useEffect, useState } from "react";
import { FetchTAs } from "../../../api";
import Table from "../../../components/Table";

export default function Lecturers() {
  const [teachingAssistants, setTeachingAssistants] = useState([]);

  function initTeachingAssistants() {
    FetchTAs()
      .then((TAs) => {
        let teachingAssistantsArray = [];
        for (const key in TAs) {
          teachingAssistantsArray[key] = TAs[key];
        }
        setTeachingAssistants(teachingAssistantsArray);
      })
      .catch((err) => console.error(err));
  }

  useEffect(initTeachingAssistants, []);
  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">
        Teaching Assistants
      </h1>
      <Table data={teachingAssistants} headers={["No.", "ID", "Name"]}></Table>
    </div>
  );
}

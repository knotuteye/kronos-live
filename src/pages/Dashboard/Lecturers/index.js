import React, { useEffect, useState } from "react";
import { FetchLecturers } from "../../../api";
import Table from "../../../components/Table";
import ImportCSVButton from "../../../components/ImportCSVButton";

export default function Lecturers() {
  const [lecturers, setLecturers] = useState([]);

  function initLecturers() {
    // FetchLecturers()
    //   .then((lects) => {
    //     let lecturerArray = [];
    //     for (const key in lects) {
    //       lecturerArray[key] = lects[key];
    //     }
    //     setLecturers(lecturerArray);
    //   })
    //   .catch((err) => console.error(err));mo
  }

  useEffect(initLecturers, []);
  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto h-full">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Lecturers</h1>
      {lecturers.length ?
        <Table data={lecturers} headers={["No.", "ID", "Name"]}></Table> :
        <div className="flex justify-center items-center h-full" >
          <ImportCSVButton onImport={}></ImportCSVButton>
        </div>
      }
    </div>
  );
}

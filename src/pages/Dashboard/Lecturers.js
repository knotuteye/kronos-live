import React, { useState } from "react";
import ImportCSVSection from "../../components/ImportCSVSection";
import SectionHeaderBar from "../../components/SectionHeaderBar";
import Table from "../../components/Table";

export default function Lecturers() {
  const [lecturers, setLecturers] = useState(
    JSON.parse(window.localStorage.getItem("lecturers")) || []
  );

  function persistLecturerData(lecturerData = []) {
    setLecturers(lecturerData);
    window.localStorage.setItem("lecturers", JSON.stringify(lecturerData));
  }

  function clearLecturerData() {
    setLecturers([]);
    window.localStorage.removeItem("lecturers");
    console.log("delete");
  }

  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto h-full">
      <SectionHeaderBar
        heading="Lecturers"
        onDelete={() => {
          clearLecturerData();
        }}
        onImport={persistLecturerData}
      ></SectionHeaderBar>
      {lecturers.length ? (
        <Table
          data={lecturers}
          columns={[
            "name",
            "ID",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ]}
          headers={[
            "No.",
            "ID",
            "Name",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ]}
        ></Table>
      ) : (
        <ImportCSVSection onImport={persistLecturerData}></ImportCSVSection>
      )}
    </div>
  );
}

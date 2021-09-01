import React, { useEffect, useState } from "react";
import { pushData } from "../../api";

export default function Generate() {
  const [loading, setLoading] = useState(false);

  const [workloadID, setWorkloadID] = useState("");

  function getDataFromStore() {
    const data = {};
    data.activities =
      JSON.parse(window.localStorage.getItem("activities")) || [];
    data.lecturers = JSON.parse(window.localStorage.getItem("lecturers")) || [];
    data.student_groups =
      JSON.parse(window.localStorage.getItem("groups")) || [];
    data.venues = JSON.parse(window.localStorage.getItem("venues")) || [];

    return data;
  }

  function validateData({ activities, lecturers, student_groups, venues }) {
    return (
      activities.length &&
      lecturers.length &&
      student_groups.length &&
      venues.length
    );
  }

  function persistWorkloadID(workloadID) {
    window.localStorage.setItem("workload_id", workloadID);
  }

  async function uploadData() {
    const data = getDataFromStore();
    if (!validateData(data))
      return alert("Please ensure that all data has been imported.");

    setLoading(true);

    try {
      const result = await pushData(data);

      if (result.status !== "success")
        throw new Error("The server could not handle your request");

      setWorkloadID(result.workload_id);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(persistWorkloadID, [workloadID]);

  return (
    <div className="flex space-y-5 flex-col p-6">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Generate</h1>
      <div className="flex flex-1 gap-5 flex-wrap justify-center">
        {loading ? (
          <div className="h-40 w-80 bg-infinity bg-center bg-contain bg-no-repeat" />
        ) : (
          <button
            className="bg-green-500 px-10 py-6 font-bold  text-white rounded"
            onClick={uploadData}
          >
            Upload Data
          </button>
        )}
      </div>
    </div>
  );
}

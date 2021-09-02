import { DownloadIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import {
  AcademicCapIcon,
  UserGroupIcon,
  LibraryIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import {
  generateTimetable,
  getLecturersTimetable,
  getStudentGroupsTimetable,
  getVenuesTimetable,
  pushData,
} from "../../api";

export default function Generate() {
  const [loading, setLoading] = useState(false);

  const [workload_id, setWorkloadID] = useState(
    window.localStorage.getItem("workload_id") || ""
  );

  const [progress, setProgress] = useState("0%");

  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [sch_Venues, setSCH_Venues] = useState([]);
  const [sch_Lecturers, setSCH_Lecturers] = useState([]);
  const [sch_Groups, setSCH_Groups] = useState([]);

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

  function persistWorkloadID() {
    workload_id && window.localStorage.setItem("workload_id", workload_id);
  }

  function clearWorkloadID() {
    window.localStorage.removeItem("workload_id");
    setWorkloadID("");
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

      console.log(result.workload_id);
      setWorkloadID(result.workload_id);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(true);
    }
  }

  function beginGeneration() {
    setProcessing(true);
    try {
      generateTimetable(workload_id);
      updateProgressBar();
    } catch (error) {
      alert(error);
    }
  }

  function updateProgressBar() {
    // const BOUND = 5 * 1000;
    const BOUND = 3 * 1000;
    const present = new Date();
    const future = new Date(present.getTime() + BOUND);

    const timer = setInterval(() => {
      const percent = Math.floor(100 - ((future - Date.now()) / BOUND) * 100);
      if (percent >= 100) {
        clearInterval(timer);
        setCompleted(true);
        console.log("Done 🦋");
      } else {
        setProgress(`${percent}%`);
      }
    }, 1000);
  }

  async function onComplete() {
    if (!completed) return;
    try {
      getStudentGroupsTimetable(workload_id).then((data) => {
        setSCH_Groups(data);
        console.log(data);
      });
      getLecturersTimetable(workload_id).then((data) => {
        setSCH_Lecturers(data);
        console.log(data);
      });
      getVenuesTimetable(workload_id).then((data) => {
        setSCH_Venues(data);
        console.log(data);
      });
    } catch (error) {
      alert(error);
    }
  }

  useEffect(persistWorkloadID, [workload_id]);

  useEffect(() => {
    onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed, workload_id]);

  return (
    <div className="flex space-y-5 flex-col p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-500 font-bold text-2xl ml-1">Generate</h1>
        <div className="flex gap-x-4">
          <button
            className="flex items-center justify-between bg-green-500 px-4 gap-x-2 py-2 text-white rounded"
            onClick={() => {}}
          >
            N/A
            <PlusIcon className="h-6 w-6"></PlusIcon>
          </button>
          <button
            className="flex items-center justify-between bg-red-500 px-4 gap-x-2 py-2 text-white rounded"
            onClick={clearWorkloadID}
          >
            Delete Workload
            <TrashIcon className="h-6 w-6"></TrashIcon>
          </button>
        </div>
      </div>
      {workload_id ? (
        <div>
          <div className="flex justify-between">
            <h2>Workload ID : {workload_id}</h2>
          </div>
          <div className="flex flex-col justify-center items-center my-6">
            {processing && !completed ? (
              <>
                <h4 className="font-bold my-10">Generating Timetable</h4>
                <div className="bg-gray-300 w-3/5 h-12 rounded-full">
                  <div
                    className="bg-light-blue-500 h-12 rounded-full flex justify-center items-center text-white font-bold transition-all"
                    style={{ width: progress, minWidth: "56px" }}
                  >
                    {progress}
                  </div>
                </div>
              </>
            ) : (
              <button
                className="flex items-center justify-between bg-indigo-500 gap-x-2 py-6 px-10 text-white rounded"
                onClick={beginGeneration}
              >
                Go!
              </button>
            )}
          </div>
        </div>
      ) : (
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
      )}
      {completed && (
        <div className="flex justify-evenly">
          <div className="flex flex-col p-5 items-center gap-y-5 border-gray-400 border rounded-2xl w-1/4">
            <h3 className="text-xl"> Groups</h3>
            <UserGroupIcon className="w-24 h-24 text-gray-500"> </UserGroupIcon>
            <select className="w-full py-2 px-2 border-b-2 border-gray-300 bg-transparent">
              {sch_Groups.map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
            <button
              className="flex gap-x-3 bg-green-500 w-full justify-center py-3 font-bold  text-white rounded"
              onClick={uploadData}
            >
              Download
              <DownloadIcon className="h-5 w-5"></DownloadIcon>
            </button>
          </div>

          <div className="flex flex-col p-5 items-center gap-y-5 border-gray-400 border rounded-2xl w-1/4">
            <h3 className="text-xl"> Lecturers</h3>
            <AcademicCapIcon className="w-24 h-24 text-gray-500"></AcademicCapIcon>
            <select className="w-full py-2 px-2 border-b-2 border-gray-300 bg-transparent">
              {sch_Lecturers.map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
            <button
              className="flex gap-x-3 bg-green-500 w-full justify-center py-3 font-bold text-white rounded"
              onClick={uploadData}
            >
              Download
              <DownloadIcon className="h-5 w-5"></DownloadIcon>
            </button>
          </div>

          <div className="flex flex-col p-5 items-center gap-y-5 border-gray-400 border rounded-2xl w-1/4">
            <h3 className="text-xl"> Venues</h3>
            <LibraryIcon className="w-24 h-24 text-gray-500"></LibraryIcon>
            <select className="w-full py-2 px-2 border-b-2 border-gray-300 bg-transparent">
              {sch_Venues.map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
            <button
              className="flex gap-x-3 bg-green-500 w-full justify-center py-3 font-bold text-white rounded"
              onClick={uploadData}
            >
              Download
              <DownloadIcon className="h-5 w-5"></DownloadIcon>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

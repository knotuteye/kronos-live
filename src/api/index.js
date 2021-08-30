import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-52-32-170-111.us-west-2.compute.amazonaws.com:5000",
});

export async function pushData(activities, lecturers, student_groups, venues) {
  const data = { activities, lecturers, student_groups, venues };
  return await API.post("/push-data", data);
}

export async function generateTimetable(workloadID) {
  return await API.get("/generate-timetable", {
    headers: { workload_id: workloadID },
  });
}

export async function getStudentGroupsTimetable(workloadID) {
  return await API.get("/get-student-groups-timetable", {
    headers: { workload_id: workloadID },
  });
}

export async function getLecturersTimetable(workloadID) {
  return await API.get("get-lecturers-timetable", {
    headers: { workload_id: workloadID },
  });
}

export async function getVenuesTimetable(workloadID) {
  return await API.get("/get-venues-timetable", {
    headers: { workload_id: workloadID },
  });
}

export async function getGrandTimetable(workloadID) {
  return await API.get("/get-grand-timetable", {
    headers: { workload_id: workloadID },
  });
}

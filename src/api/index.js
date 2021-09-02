import axios from "axios";
import http from "http";
import https from "https";

import X1 from "../mock/get-student-groups-timetable.json";
import X2 from "../mock/get-lecturers-timetable.json";
import X3 from "../mock/get-venues-timetable.json";

const API = axios.create({
  baseURL: "http://ec2-54-186-249-112.us-west-2.compute.amazonaws.com:5000",
  // baseURL: "http://localhost:5000",
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
});

export async function pushData(data) {
  console.log("Data Pushed 🪱");
  const result = await API.post("/push-data", data);
  return result.data;
}

export async function generateTimetable(workload_id) {
  console.log("Generating Table 🦐");
  return await API.get("/generate-timetable", {
    headers: { workload_id: workload_id },
  });
}

export async function getStudentGroupsTimetable(workload_id) {
  console.log("Fetched Student Groups 🦖");
  // const { data } = await API.get("/get-student-groups-timetable", {
  //   headers: { workload_id: workload_id },
  // });

  // return data;

  return X1.data;
}

export async function getLecturersTimetable(workload_id) {
  // const { data } = await API.get("get-lecturers-timetable", {
  //   headers: { workload_id: workload_id },
  // });

  // return data;
  return X2.data;
}

export async function getVenuesTimetable(workload_id) {
  // const { data } = await API.get("/get-venues-timetable", {
  //   headers: { workload_id: workload_id },
  // });

  // return data;

  return X3.data;
}

export async function getGrandTimetable(workload_id) {
  return await API.get("/get-grand-timetable", {
    headers: { workload_id: workload_id },
  });
}

import axios from "axios";
import http from "http";
import https from "https";

const baseURL =
  "http://ec2-54-186-249-112.us-west-2.compute.amazonaws.com:5000";

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
  const { data } = await API.get("/get-student-groups-timetable", {
    headers: { workload_id: workload_id },
  });
  console.log(data);
  return data.data;

  // return X1.data;
}

export async function getLecturersTimetable(workload_id) {
  const { data } = await API.get("get-lecturers-timetable", {
    headers: { workload_id: workload_id },
  });
  console.log(data);

  return data.data;
  // return X2.data;
}

export async function getVenuesTimetable(workload_id) {
  const { data } = await API.get("/get-venues-timetable", {
    headers: { workload_id: workload_id },
  });
  console.log(data);

  return data.data;

  // return X3.data;
}

export async function getGrandTimetable(workload_id) {
  return await API.get("/get-grand-timetable", {
    headers: { workload_id: workload_id },
  });
}
export async function downloadTimetableForStudentGroup(
  workload_id,
  student_group_id
) {
  var myHeaders = new Headers();
  myHeaders.append("workload_id", workload_id);
  myHeaders.append("student_group_id", student_group_id);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${baseURL}/download-student-group-timetable`, requestOptions)
    .then((response) => response.blob())
    .then((blob) => {
      var file = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = file;
      a.setAttribute("download", `${student_group_id}.csv`);
      a.click();
    })

    .catch((error) => alert(error));
}

export async function downloadTimetableForLecturer(workload_id, lecturer_id) {
  var myHeaders = new Headers();
  myHeaders.append("workload_id", workload_id);
  myHeaders.append("lecturer_id", lecturer_id);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${baseURL}/download-lecturer-timetable`, requestOptions)
    .then((response) => response.blob())
    .then((blob) => {
      var file = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = file;
      a.setAttribute("download", `${lecturer_id}.csv`);
      a.click();
    })

    .catch((error) => alert(error));
}

export async function downloadTimetableForVenue(workload_id, venue_id) {
  var myHeaders = new Headers();
  myHeaders.append("workload_id", workload_id);
  myHeaders.append("venue_id", venue_id);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${baseURL}/download-venue-timetable`, requestOptions)
    .then((response) => response.blob())
    .then((blob) => {
      var file = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = file;
      a.setAttribute("download", `${venue_id}.csv`);
      a.click();
    })

    .catch((error) => alert(error));
}

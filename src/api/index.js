import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:3001/",
  timeout: 1000,
});

export function FetchLecturers() {
  const lecturers = await instance
    .get("/lecturers")
    .then((response) => response.data);
  console.log(lecturers);
}

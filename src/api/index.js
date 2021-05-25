import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 1000,
});

export async function FetchLecturers() {
  const lecturers = await instance
    .get("/lecturers")
    .then((response) => response.data);
  return lecturers;
}

export async function FetchActivities() {
  const activities = await instance
    .get("/activities")
    .then((response) => response.data);
  return activities;
}

export async function FetchGroups() {
  const groups = await instance
    .get("/groups")
    .then((response) => response.data);
  return groups;
}

export async function FetchVenues() {
  const venues = await instance
    .get("/venues")
    .then((response) => response.data);
  return venues;
}

export async function FetchStats() {
  const statistics = await instance
    .get("/statistics")
    .then((response) => response.data);
  return statistics;
}

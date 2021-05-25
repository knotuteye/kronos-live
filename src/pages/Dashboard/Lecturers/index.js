import React, { useEffect } from "react";
import { FetchLecturers } from "../../../api";

export default function Lecturers() {
  useEffect(FetchLecturers, []);
  return (
    <div className="flex space-y-5 flex-col p-6">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Lecturers</h1>
      <div className="flex flex-1 gap-5 flex-wrap"></div>
    </div>
  );
}

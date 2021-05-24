import React from "react";
import DisplayCard from "../../../components/DisplayCard";
import { AcademicCapIcon } from "@heroicons/react/outline";

export default function Overview() {
  return (
    <div className="flex p-6">
      <div className="flex gap-5 flex-wrap">
        <DisplayCard
          backdrop="bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
          icon={<AcademicCapIcon className="h-10"></AcademicCapIcon>}
          label="Lecturers"
          path="/dashboard/lecturers"
          data={25}
        ></DisplayCard>

        <DisplayCard
          backdrop="bg-gradient-to-l from-cool-gray-900 to-warm-gray-600"
          icon={<AcademicCapIcon className="h-10"></AcademicCapIcon>}
          label="Courses"
          path="/dashboard/courses"
          data={25}
        ></DisplayCard>

        <DisplayCard
          backdrop="bg-gradient-to-l from-green-200 via-green-400 to-green-500"
          icon={<AcademicCapIcon className="h-10"></AcademicCapIcon>}
          label="Student Groups"
          path="/dashboard/groups"
          data={25}
        ></DisplayCard>
      </div>
    </div>
  );
}

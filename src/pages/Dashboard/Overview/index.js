import React from "react";
import DisplayCard from "../../../components/DisplayCard";
import { AcademicCapIcon } from "@heroicons/react/outline";

export default function Overview() {
  return (
    <div className="flex p-6">
      <div className="flex gap-5 flex-wrap">
        <DisplayCard
          backdrop="bg-gradient-to-l from-light-blue-400 to-blue-500"
          icon={<AcademicCapIcon className="h-10"></AcademicCapIcon>}
          label="Lecturers"
          path="/dashboard/lecturers"
          data={25}
        ></DisplayCard>

        <DisplayCard
          backdrop="bg-gradient-to-l from-rose-300 to-rose-500"
          icon={<AcademicCapIcon className="h-10"></AcademicCapIcon>}
          label="Courses"
          path="/dashboard/courses"
          data={25}
        ></DisplayCard>

        <DisplayCard
          backdrop="bg-gradient-to-l from-emerald-500 to-lime-600"
          icon={<AcademicCapIcon className="h-10"></AcademicCapIcon>}
          label="Groups"
          path="/dashboard/groups"
          data={25}
        ></DisplayCard>
      </div>
    </div>
  );
}

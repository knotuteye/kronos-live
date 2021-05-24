import { AcademicCapIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/outline";
import React from "react";
import DisplayCard from "../../../components/DisplayCard";

export default function Overview() {
  return (
    <div className="flex space-y-5 flex-col p-6">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Overview</h1>
      <div className="flex flex-1 gap-5 flex-wrap">
        <DisplayCard
          backdrop="bg-gradient-to-l from-light-blue-400 to-blue-500"
          icon={<UserGroupIcon className="h-10"></UserGroupIcon>}
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
          icon={<UsersIcon className="h-10"></UsersIcon>}
          label="Groups"
          path="/dashboard/groups"
          data={25}
        ></DisplayCard>
      </div>
    </div>
  );
}

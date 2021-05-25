import {
  AcademicCapIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import DisplayCard from "../../../components/DisplayCard";

export default function Overview() {
  const [statistics, setStatistics] = useState({
    lecturers: 0,
    courses: 0,
    groups: 0,
  });

  function fetchStatistics() {
    setStatistics({
      lecturers: 36,
      courses: 120,
      groups: 23,
    });
  }

  useEffect(fetchStatistics, []);
  return (
    <div className="flex space-y-5 flex-col p-6">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Overview</h1>
      <div className="flex flex-1 gap-5 flex-wrap">
        <DisplayCard
          backdrop="bg-gradient-to-l from-light-blue-400 to-blue-500"
          icon={<UserGroupIcon className="h-10"></UserGroupIcon>}
          label="Lecturers"
          path="/dashboard/lecturers"
          data={statistics.lecturers}
        ></DisplayCard>

        <DisplayCard
          backdrop="bg-gradient-to-l from-rose-300 to-rose-500"
          icon={<AcademicCapIcon className="h-10"></AcademicCapIcon>}
          label="Courses"
          path="/dashboard/courses"
          data={statistics.courses}
        ></DisplayCard>

        <DisplayCard
          backdrop="bg-gradient-to-l from-emerald-500 to-lime-600"
          icon={<UsersIcon className="h-10"></UsersIcon>}
          label="Groups"
          path="/dashboard/groups"
          data={statistics.groups}
        ></DisplayCard>
      </div>
    </div>
  );
}

import {
  AcademicCapIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { FetchStats } from "../../../api";
import DisplayCard from "../../../components/DisplayCard";

export default function Overview() {
  const [statistics, setStatistics] = useState({
    lecturers: 0,
    activities: 0,
    groups: 0,
  });

  function initStatistics() {
    FetchStats()
      .then((stats) => {
        setStatistics(stats);
      })
      .catch((err) => console.error(err));
  }

  useEffect(initStatistics, []);

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
          icon={<AcademicCapIcon className="h-11"></AcademicCapIcon>}
          label="Activities"
          path="/dashboard/activities"
          data={statistics.activities}
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

import {
  AcademicCapIcon,
  LibraryIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import DisplayCard from "../../components/DisplayCard";

export default function Overview() {
  const [statistics, setStatistics] = useState({
    lecturers: 0,
    activities: 0,
    groups: 0,
    venues: 0,
  });

  function initStatistics() {
    const categories = ["lecturers", "activities", "groups", "venues"];
    const statsArr = categories.map(
      (x) => (JSON.parse(window.localStorage.getItem(x)) || []).length
    );
    let statObj = {
      lecturers: 0,
      activities: 0,
      groups: 0,
      venues: 0,
    };

    categories.forEach((cat, i) => {
      statObj[cat] = statsArr[i];
    });

    setStatistics(statObj);
  }

  useEffect(initStatistics, []);

  return (
    <div className="flex space-y-5 flex-col p-6">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Overview</h1>
      <div className="flex flex-1 gap-5 flex-wrap max-h-table overflow-y-auto">
        <DisplayCard
          backdrop="bg-gradient-to-l from-light-blue-400 to-blue-500"
          icon={<UserGroupIcon className="h-10"></UserGroupIcon>}
          label="Lecturers"
          path="/dashboard/lecturers"
          data={statistics.lecturers}
        ></DisplayCard>

        {/* <DisplayCard
          backdrop="bg-gradient-to-l from-orange-400 to-rose-400"
          icon={
            <PresentationChartLineIcon className="h-10"></PresentationChartLineIcon>
          }
          label="Teaching Assistants"
          path="/dashboard/teaching_assistants"
          data={statistics.TAs}
        ></DisplayCard> */}

        {/* <DisplayCard
          backdrop="bg-gradient-to-r from-cool-gray-900 to-warm-gray-600"
          icon={<CalculatorIcon className="h-10"></CalculatorIcon>}
          label="Lab Assistants"
          path="/dashboard/lab_assistants"
          data={statistics.LAs}
        ></DisplayCard> */}

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

        <DisplayCard
          backdrop="bg-gradient-to-r from-cool-gray-900 to-warm-gray-600"
          icon={<LibraryIcon className="h-10"></LibraryIcon>}
          label="Venues"
          path="/dashboard/venues"
          data={statistics.venues}
        ></DisplayCard>
      </div>
    </div>
  );
}

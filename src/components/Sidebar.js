import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ menuMapArray, basePath }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`flex flex-col text-white h-full shadow-md 
      transition-all bg-gradient-to-t from-purple-300 via-purple-500
      rounded-l-2xl to-purple-800 ${isCollapsed ? "w-16" : "w-max"}`}
    >
      <div className="flex flex-col mt-20 w-full h-full">
        {menuMapArray.map((menuItem) => (
          <NavLink
            title={menuItem.name}
            to={`/${basePath + menuItem.path}`}
            exact
            key={menuItem.path}
            className={`flex h-12 items-center bg-purple-500 bg-opacity-0 hover:bg-purple-600 ${
              isCollapsed ? "justify-center" : "px-10"
            }`}
            activeClassName="bg-opacity-100 border-l-4 backdrop-filter backdrop-blur-lg"
          >
            {menuItem.icon}
            <p
              className={`ml-6 transition-opacity ${
                isCollapsed ? "hidden" : "flex"
              }`}
            >
              {menuItem.name}
            </p>
          </NavLink>
        ))}
      </div>
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex w-full h-14 bottom-0 cursor-pointer
        bg-purple-600 bg-opacity-10 justify-center items-center
        rounded-bl-2xl font-bold tracking-widest hover:bg-opacity-100"
      >
        <ChevronDoubleLeftIcon
          className={`h-6 w-6 transform ${isCollapsed ? "rotate-180" : "mr-5"}`}
          viewBox="0 0 24 24"
        ></ChevronDoubleLeftIcon>
        <p className={`mr-5 ${isCollapsed ? "hidden" : "flex"}`}>
          {"Collapse".toUpperCase()}
        </p>
      </div>
    </div>
  );
}

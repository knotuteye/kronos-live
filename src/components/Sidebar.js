import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ menuMapArray }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`flex text-white fixed h-screen shadow-2xl
      transition-all bg-gradient-to-t from-purple-300 via-purple-500
        to-purple-800 ${isCollapsed ? "w-16" : "w-72"}`}
    >
      <div className="flex flex-col mt-20 w-full">
        {menuMapArray.map((menuItem) => (
          <NavLink
            title={menuItem.name}
            to={menuItem.path}
            key={menuItem.path}
            className={`flex h-12 items-center ${
              isCollapsed ? "justify-center" : "px-10"
            }  bg-purple-600 ${
              document.location.hash === menuItem.path ||
              document.location.hash === menuItem.path.replace("#", "")
                ? "bg-opacity-100 border-l-4"
                : "bg-opacity-0"
            }`}
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
        className="flex w-full h-14 absolute bottom-0 cursor-pointer
        bg-purple-600 bg-opacity-10 justify-center items-center
        font-bold tracking-widest hover:bg-opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform ${isCollapsed ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
        <p className={`mr-5 ${isCollapsed ? "hidden" : "flex"}`}>
          {"Collapse".toUpperCase()}
        </p>
      </div>
    </div>
  );
}

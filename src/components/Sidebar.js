import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ menuMapArray }) {
  return (
    <div
      className="flex text-white fixed w-72 h-screen shadow-2xl
      bg-gradient-to-t from-purple-300 via-purple-500 to-purple-800"
    >
      <div className="flex flex-col mt-20 w-full">
        {menuMapArray.map((menuItem) => (
          <NavLink to={menuItem.path} className="flex px-10 py-3 items-center bg-red-700">
            {menuItem.icon}
            <p>{menuItem.name}</p>
          </NavLink>
        ))}
      </div>
      <div
        className="flex w-full h-14 absolute bottom-0 cursor-pointer
        bg-purple-600 bg-opacity-10 justify-center items-center
        font-bold tracking-widest hover:bg-opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-4"
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
        <p className="mr-5">{"Collapse".toUpperCase()}</p>
      </div>
    </div>
  );
}

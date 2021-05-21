import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ menuMapArray }) {
  return (
    <div className="flex fixed w-72 h-screen bg-gradient-to-br from-blue-500 via-blue-300 to-green-200 shadow-2xl">
      <div>
        {menuMapArray.map((menuItem) => (
          <NavLink to={menuItem.path}>
            <i className={menuItem.icon}></i>
            <p>{menuItem.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="flex w-full absolute bottom-0 bg-red-600">
        <i className={""}></i>
        <p>{"Collapse".toUpperCase()}</p>
      </div>
    </div>
  );
}

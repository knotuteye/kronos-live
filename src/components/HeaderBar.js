import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

export default function HeaderBar({ username, onClick }) {
  return (
    <div className="flex justify-end gap-x-4 w-full px-10 py-2 rounded-tr-2xl bg-white shadow-sm">
      <button onClick={onClick} className="flex text-gray-400 items-center">
        <UserCircleIcon
          className="h-full w-10"
          strokeWidth={1}
        ></UserCircleIcon>
        <p className="ml-2">{username}</p>
      </button>
    </div>
  );
}

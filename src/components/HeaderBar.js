import React from "react";

export default function HeaderBar({ username, onClick }) {
  return (
    <div className="flex justify-end gap-x-4 w-full h-16 px-10 py-3 rounded-tr-2xl bg-white shadow-sm">
      <button onClick={onClick} className="flex text-gray-400 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="ml-2">{username}</p>
      </button>
    </div>
  );
}

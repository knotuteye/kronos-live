import React from "react";
import { Link } from "react-router-dom";

export default function DisplayCard({ icon, backdrop, data, label, path }) {
  return (
    <Link
      to={path}
      className={`flex rounded-2xl px-8 py-5 shadow-sm hover:shadow-lg w-64 text-white items-center ${backdrop}`}
    >
      <div className="">{icon}</div>
      <div className="flex flex-col flex-1">
        <p className="text-lg">{label}</p>
        <p className="text-3xl">{data}</p>
      </div>
    </Link>
  );
}

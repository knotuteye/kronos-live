import React from "react";
import { Link } from "react-router-dom";

export default function DisplayCard({ icon, backdrop, data, label, path }) {
  return (
    <Link
      to={path}
      className={`flex rounded-lg px-8 h-32 py-4 shadow-sm hover:shadow-lg w-64 text-white ${backdrop}`}
    >
      <div className="">{icon}</div>
      <div className="flex flex-col flex-1 ml-5">
        <p className="text-lg">{label}</p>
        <p className="text-3xl">{data}</p>
      </div>
    </Link>
  );
}

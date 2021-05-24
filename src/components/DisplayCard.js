import React from "react";
import { Link } from "react-router-dom";

export default function DisplayCard({ icon, backdrop, data, label, path }) {
  return (
    <Link
      to={path}
      className={`flex rounded-lg px-8 h-32 py-4 shadow-sm hover:shadow-lg w-64 text-white ${backdrop}`}
    >
      <div className="opacity-50">{icon}</div>
      <div className="flex flex-col flex-1 ml-5">
        <p className="text-lg opacity-90">{label}</p>
        <p className="text-4xl text-center mt-3">{data}</p>
      </div>
    </Link>
  );
}

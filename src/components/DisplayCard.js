import React from "react";

export default function DisplayCard({ icon, figure, caption }) {
  return (
    <div className="flex rounded-2xl">
      {icon}
      <p>{caption}</p>
      <p>{figure}</p>
    </div>
  );
}

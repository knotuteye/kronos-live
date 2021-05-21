import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function _404() {
  const history = useHistory();

  return (
    <div
      className="flex justify-center items-center h-screen 
    bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"
    >
      <div className="flex flex-col bg-white rounded-2xl shadow-xl items-center">
        <div className="flex w-96 h-60 bg-_404 bg-85% bg-center bg-no-repeat"></div>
        <p className="text-lg my-10">This page doesn't exist...yet</p>
        <Link
          to="/"
          className="bg-green-500 hover:bg-green-700 text-white
         font-bold py-3 px-5 
         mb-12 w-max rounded-full shadow-sm hover:shadow-md disabled:bg-gray-300 cursor-pointer"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

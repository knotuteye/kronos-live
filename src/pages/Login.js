import React, { useState } from "react";
import { loginWithEmailAndPassword } from "../auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function _login(e) {
    e.preventDefault();
    console.log({ email, password });
    loginWithEmailAndPassword(email, password);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-200 via-green-400 to-green-500">
      <div className="flex bg-white rounded-2xl shadow-xl">
        <div className="flex w-80  bg-masthead bg-85% bg-center bg-no-repeat "></div>
        <form className="flex flex-col max-w-xs p-10">
          <h2 className="text-3xl text-center mb-4 tracking-widest font-Poppins text-green-500 border-dashed border-b border-green-400">
            KRONOS
          </h2>
          <div className="flex flex-col my-3">
            <label
              className="text-sm font-bold px-3 pb-2 text-green-500"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-green-50 rounded-full px-5 py-2 shadow-sm focus:outline-none"
            />
          </div>
          <div className="flex flex-col my-3">
            <label
              className="text-sm font-bold px-3 pb-2 text-green-500"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-green-50 rounded-full px-5 py-2 shadow-sm focus:outline-none"
            />
          </div>
          <div className="my-3">
            <input
              type="submit"
              onClick={_login}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full shadow-sm hover:shadow-md"
              value="Log In"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

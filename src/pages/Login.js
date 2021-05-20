import React from "react";

export default function Login() {
  return (
    <form className="flex flex-col max-w-sm p-5">
      <div className="flex flex-col my-3">
        <label for="email">Email</label>
        <input type="email" />
      </div>
      <div className="flex flex-col my-3">
        <label for="password">Password</label>
        <input type="password" />
      </div>
      <div className="my-3">
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          value="Log In"
        />
      </div>
    </form>
  );
}

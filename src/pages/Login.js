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
    <form className="flex flex-col max-w-sm p-5">
      <div className="flex flex-col my-3">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex flex-col my-3">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="my-3">
        <input
          type="submit"
          onClick={_login}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          value="Log In"
        />
      </div>
    </form>
  );
}

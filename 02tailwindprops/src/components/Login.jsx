import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser}=useContext(UserContext);
  const handleSubmit = (e) => {
    
    e.preventDefault();
    setUser({username,password})
  };
  return (
    <div className="justify-self-center">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"   "}
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {"   "}

      <button type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
       focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit}>

        Submit
      </button>
    </div>
  );
}

export default Login;

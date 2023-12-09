import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import "./index.css";
import { useState } from "react";

function App() {
  const [from, to] = useState("to");
  return (
    <>
      <UserContextProvider>
        {/* <h1 className="w-full">Currency:{from} </h1> */}
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar /> {/* ✅ Only one NavBar here */}
      <Outlet />
    </div>
  );
}

export default App;

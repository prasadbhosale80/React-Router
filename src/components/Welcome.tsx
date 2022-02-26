import React from "react";
import { Link, Outlet } from "react-router-dom";

function Welcome() {
  return (
    <>
      <h1>Welcome Page</h1>
      <button><Link to="Prasad">Log In</Link></button>
      <Outlet />
    </>
  );
}

export default Welcome;

import React from "react";
import { Outlet } from "react-router-dom";

const Download = () => {
  return (
    <div>
      <h1>Download Page</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default Download;

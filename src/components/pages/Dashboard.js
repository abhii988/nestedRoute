import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default Dashboard;

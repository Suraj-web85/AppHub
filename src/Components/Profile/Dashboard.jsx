import React from "react";
import "./Dashboard.css";
import { Menu } from "./Menu";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="main-container aflex">
      <Menu />
      <div className="content-container contain">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

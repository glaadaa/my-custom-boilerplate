import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pl-[300px]">
      <SideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

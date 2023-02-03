import React from "react";
import SideBar from "./SideBar";
function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <SideBar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;

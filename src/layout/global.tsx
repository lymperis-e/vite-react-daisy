import React from "react";
import { useLocation, Outlet } from "react-router-dom";

function GlobalLayout() {
  return (
    <>
      {/* Main content */}
      <div className="w-full h-full pt-[64px] flex flex-col items-center content-center">
        <Outlet />
      </div>
    </>
  );
}

export default GlobalLayout;

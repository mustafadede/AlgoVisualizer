import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";

function RootLayout() {
  return (
    <div className="flex flex-col items-center h-screen overflow-hidden bg-slate-700">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;

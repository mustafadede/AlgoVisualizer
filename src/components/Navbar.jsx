import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full mx-4 my-4 bg-gray-900 rounded-2xl">
      <div className="sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-white">
              React Algo Visualizer
            </Link>
          </div>
          {/* <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <div className="relative">
                <button className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                  Sorting
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

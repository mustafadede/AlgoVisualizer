import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdownToggle = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="w-full bg-gray-800">
      <div className="sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-white" onClick={closeDropdownToggle}>
              React Algo Visualizer
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <div className="relative">
                <button
                  onClick={handleDropdownToggle}
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Sorting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {dropdownOpen && (
        <div className="flex flex-row w-full bg-gray-900 sm:px-6 lg:px-8">
          <NavLink
            to="/sorting/bubble"
            className={({ isActive }) => {
              return `block pr-4 py-2 text-md ${isActive ? "text-gray-300 font-bold" : "text-gray-100"}`;
            }}
          >
            Bubble Sort
          </NavLink>
          <NavLink
            to="/sorting/selection"
            className={({ isActive }) => {
              return `block pr-4 py-2 text-md ${isActive ? "text-gray-300 font-bold" : "text-gray-100"}`;
            }}
          >
            Selection Sort
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

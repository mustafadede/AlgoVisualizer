import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <h1 className="mt-8 mb-2 text-4xl font-bold text-center">React Algo Visualizer</h1>
      <p className="text-xl">React Algo Visualizer is a web application that visualizes various algorithms.</p>
      <div className="flex gap-4">
        <div className="px-8 pt-4 pb-8 mt-4 w-fit bg-slate-900 rounded-xl">
          <h1 className="my-4 text-2xl font-bold text-white">Sorting</h1>
          <Link to="/sorting/bubble" className="block py-2 text-gray-100 text-md hover:text-gray-300">
            Bubble Sort
          </Link>
          <Link to="/sorting/selection" className="block py-2 text-gray-100 text-md hover:text-gray-300">
            Selection Sort
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

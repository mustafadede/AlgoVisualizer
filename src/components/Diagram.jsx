import React from "react";

function Diagram({ array, currentIndex }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-center w-full gap-2 h-96">
        {array.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col justify-end w-10 ${currentIndex === index ? "bg-red-800" : "bg-blue-800"}`}
            style={{ height: `${value}px` }}
          >
            <p className="text-center text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center w-full h-24 gap-2">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-red-800"></div>
          <p className="text-slate-300">Current</p>
        </div>
      </div>
    </div>
  );
}

export default Diagram;

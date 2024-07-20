import React from "react";

function Diagram({ array, currentIndex }) {
  return (
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
  );
}

export default Diagram;

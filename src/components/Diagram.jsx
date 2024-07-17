import React from "react";

function Diagram({ array, currentIndex }) {
  return (
    <div className="flex justify-center w-full h-full gap-2">
      {array.map((value, index) => (
        <div
          key={index}
          className={
            currentIndex === index
              ? "flex flex-col-reverse justify-end w-10 bg-red-800"
              : "flex flex-col-reverse justify-end w-10 bg-blue-800"
          }
          style={{ height: `${value}%` }}
        >
          <p className="text-center text-white">{value}</p>
        </div>
      ))}
    </div>
  );
}

export default Diagram;

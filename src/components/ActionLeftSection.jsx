import React, { useState } from "react";
import Player from "./Player";
import Diagram from "./Diagram";
function ActionLeftSection({ title, isClosed, closeHandler }) {
  const [array, setArray] = useState([12, 64, 23, 45, 76, 34, 87]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const randomizeArray = () => {
    const arr = Array.from({ length: 7 }, () => Math.floor(Math.random() * (100 - 1) + 1));
    setArray(arr);
  };

  return (
    <div className={isClosed ? "relative w-full h-full px-8 pb-20" : "relative w-2/3 h-full px-8 pb-20"}>
      <Diagram array={array} currentIndex={currentIndex} />
      {isClosed && <h1 className="w-full mt-4 text-2xl font-bold text-center">{title}</h1>}
      <Player randomzieHandler={randomizeArray} closeHandler={closeHandler} />
    </div>
  );
}

export default ActionLeftSection;

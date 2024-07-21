import React, { useEffect, useState } from "react";
import Player from "./Player";
import Diagram from "./Diagram";
function ActionLeftSection({ title, isClosed, closeHandler }) {
  const [array, setArray] = useState([12, 64, 23, 45, 76, 34, 87]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [play, setPlay] = useState(false);

  const randomizeArray = () => {
    const arr = Array.from({ length: 7 }, () => Math.floor(Math.random() * (100 - 1) + 1));
    setArray(arr);
  };

  useEffect(() => {
    let id;
    if (play) {
      id = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [play]);

  useEffect(() => {
    if (currentIndex >= array.length) {
      setCurrentIndex(0);
      setPlay(false);
    }
  }, [currentIndex]);

  const playHandler = () => {
    setPlay(true);
  };

  const pauseHandler = () => {
    setPlay(false);
  };

  return (
    <div className={isClosed ? "relative w-full h-full px-8 pb-20" : "relative w-2/3 h-full px-8 pb-20"}>
      {isClosed && <h1 className="w-full mt-4 text-2xl font-bold text-center text-slate-300">{title}</h1>}
      <Diagram array={array} currentIndex={currentIndex} />
      <Player
        randomzieHandler={randomizeArray}
        play={play}
        playHandler={playHandler}
        pauseHandler={pauseHandler}
        closeHandler={closeHandler}
      />
    </div>
  );
}

export default ActionLeftSection;

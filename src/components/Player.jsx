import { CornersIcon, PlayIcon, ShuffleIcon } from "@radix-ui/react-icons";
import React from "react";
import Icon from "./Icon";

function Player({ randomzieHandler, playHandler, closeHandler }) {
  return (
    <div className="absolute flex items-center justify-center gap-2 px-2 py-2 transform -translate-x-1/2 h-fit w-fit rounded-xl bottom-10 left-1/2 bg-slate-900">
      <Icon icon={<ShuffleIcon />} onClickHandler={randomzieHandler} />
      <Icon icon={<PlayIcon />} onClickHandler={playHandler} />
      <Icon icon={<CornersIcon />} onClickHandler={closeHandler} />
    </div>
  );
}

export default Player;

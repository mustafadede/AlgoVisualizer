import React from "react";

function Icon({ icon, onClickHandler, additionalClass }) {
  return (
    <button
      className={`flex items-center justify-center w-10 h-10 text-white transition-colors duration-150 hover:bg-slate-700 rounded-xl ${additionalClass}`}
      onClick={onClickHandler}
    >
      {icon}
    </button>
  );
}

export default Icon;

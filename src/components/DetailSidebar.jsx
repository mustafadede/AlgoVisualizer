import React from "react";
import YouTube from "react-youtube";

function DetailSidebar({ source }) {
  const opts = {
    height: "340",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="w-1/3 px-8 pb-4 mb-10 overflow-y-auto scrollbar-none rounded-xl bg-slate-900">
      <h1 className="my-4 text-2xl font-bold text-white">{source.title}</h1>
      <p className="mb-4 text-gray-300">
        {source.description}
        {source.Sources && (
          <a href={source?.Sources[0]} target="_blank" rel="noreferrer" className="ml-2 text-blue-500 underline">
            Source
          </a>
        )}
      </p>
      <h2 className="mb-2 text-xl font-bold text-white">{source.subTitle}</h2>
      {source.steps.map((step, index) => (
        <div key={index} className="flex mb-4">
          <h3 className="mb-2 mr-2 text-lg font-bold text-white">{index}</h3>
          <p className="text-gray-300">{step}</p>
        </div>
      ))}
      <h2 className="mb-2 text-xl font-bold text-white">Time Complexity</h2>
      <p className="mb-4 text-gray-300">{source.timeComplexity}</p>
      <h2 className="mb-2 text-xl font-bold text-white">Space Complexity</h2>
      <p className="mb-4 text-gray-300">{source.spaceComplexity}</p>
      {source.youtube && <YouTube videoId={source.youtube} opts={opts} />}
    </div>
  );
}

export default DetailSidebar;

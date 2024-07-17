import React from "react";
import DetailSidebar from "@components/DetailSidebar";
import bubble from "@/assets/bubble.json";
function Bubble() {
  return (
    <div className="flex w-full h-full pb-16">
      <DetailSidebar source={bubble} />
    </div>
  );
}

export default Bubble;

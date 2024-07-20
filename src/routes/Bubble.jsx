import React, { useState } from "react";
import DetailSidebar from "@components/DetailSidebar";
import bubble from "@/assets/bubble.json";
import ActionLeftSection from "@components/ActionLeftSection";

function Bubble() {
  const [isClosed, setIsClosed] = useState(false);
  const closeHandler = () => setIsClosed(!isClosed);
  return (
    <div className="flex w-full min-h-full pb-16">
      {!isClosed && <DetailSidebar source={bubble} />}
      <ActionLeftSection title={"Bubble Sort"} isClosed={isClosed} closeHandler={closeHandler} />
    </div>
  );
}

export default Bubble;

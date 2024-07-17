import React, { useState } from "react";
import selection from "@/assets/selection.json";
import DetailSidebar from "@components/DetailSidebar";
import ActionLeftSection from "@components/ActionLeftSection";

function Selection() {
  const [isClosed, setIsClosed] = useState(false);
  const closeHandler = () => setIsClosed(!isClosed);
  return (
    <div className="flex w-full min-h-full pb-16">
      {!isClosed && <DetailSidebar source={selection} />}
      <ActionLeftSection isClosed={isClosed} closeHandler={closeHandler} />
    </div>
  );
}

export default Selection;

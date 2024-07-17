import React from "react";
import selection from "@/assets/selection.json";
import DetailSidebar from "@components/DetailSidebar";
function Selection() {
  return (
    <div className="flex w-full h-full pb-16">
      <DetailSidebar source={selection} />
    </div>
  );
}

export default Selection;

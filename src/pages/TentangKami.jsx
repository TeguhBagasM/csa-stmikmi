import React from "react";

import TimKami from "../components/abouts/TimKami";
import TentangLayanan from "../components/abouts/TentangLayanan";
import ScrollToTopButton from "../components/ScrollToTopButton";

const TentangKami = () => {
  return (
    <div className="min-h-[650px]">
      <TentangLayanan />
      <ScrollToTopButton />
    </div>
  );
};

export default TentangKami;

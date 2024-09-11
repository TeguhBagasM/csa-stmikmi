import React from "react";

import VisiMisi from "../components/abouts/VisiMisi";
import ScrollToTopButton from "../components/layouts/ScrollToTopButton";
import TentangCsa from "../components/abouts/TentangCsa";

const TentangKami = () => {
  return (
    <div className="min-h-[650px]">
      <TentangCsa />
      <VisiMisi />
      <ScrollToTopButton />
    </div>
  );
};

export default TentangKami;

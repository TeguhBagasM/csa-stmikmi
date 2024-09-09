import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import DivisiCsa from "../components/home/Divisi";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="min-h-[1200px]">
      <Banner />
      <DivisiCsa />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

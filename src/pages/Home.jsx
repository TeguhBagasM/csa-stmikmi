import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import DivisiCsa from "../components/home/Divisi";
import Banner from "../components/home/Banner";
import HomeCsa from "../components/home/HomeCsa";

const Home = () => {
  return (
    <div className="min-h-[1200px]">
      <Banner />
      <HomeCsa />
      <DivisiCsa />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

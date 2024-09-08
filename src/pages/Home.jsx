import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Banner from "../components/home/Banner";
import Divisi from "../components/home/Divisi";

const Home = () => {
  return (
    <div className="min-h-[1200px]">
      <Banner />
      <Divisi />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

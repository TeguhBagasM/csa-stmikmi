import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Banner from "../components/Home/Banner";
import Divisi from "../components/Home/Divisi";

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

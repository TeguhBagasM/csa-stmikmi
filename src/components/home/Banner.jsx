import React from "react";
import Image from "../../assets/images/banner.png";
import Type from "./Type";

const Banner = () => {
  const handleDaftar = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfTwQGgopuV7DHVV7IZ_ki_vcGjQ4JH9ASExY8nvIUr1l1hcw/viewform",
      "_blank"
    );
  };

  return (
    <section className="h-full max-h-[760px] mb-8 xl:mb-24 dark:bg-gray-950">
      <div className="flex flex-col lg:flex-row">
        <div
          data-aos="slide-bottom"
          className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0"
        >
          <h1
            data-aos="zoom-in"
            className="text-4xl lg:text-[48px] font-semibold leading-none mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 dark:to-cyan-400 bg-clip-text text-transparent"
          >
            Creative Student Association
          </h1>

          <div className="max-w-[440px] text-2xl font-medium mb-8 text-blue-500">
            <Type />
          </div>
          <button
            data-aos="zoom-in"
            onClick={handleDaftar}
            className="relative px-6 py-2 border-2 rounded-lg bg-white text-gray-950 font-semibold dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 animate-border-animate border-transparent shadow-lg shadow-blue-500/50 hover:shadow-blue-700/70 dark:hover:shadow-blue-500/70"
          >
            Daftar Sekarang
          </button>
        </div>

        <div data-aos="zoom-in" className="flex-1 lg:flex justify-center items-center mt-8 lg:mt-0">
          <div className="relative w-full max-w-[80%] md:max-w-[60%] mx-auto">
            <img src={Image} alt="Banner" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

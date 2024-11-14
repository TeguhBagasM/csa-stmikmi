import React, { useState, useEffect } from "react";
import Image from "../../assets/images/banner.png";
import Type from "./Type";
import { generateQuotes } from "../../utils";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  // const navigate = useNavigate();

  useEffect(() => {
    const quotes = generateQuotes();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  // const handleDaftar = () => {
  //   toast.error("Pendaftaran sudah ditutup");
  // };
  const handleDaftar = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfTwQGgopuV7DHVV7IZ_ki_vcGjQ4JH9ASExY8nvIUr1l1hcw/viewform",
      "_blank"
    );
  };

  // const handleProjects = () => {
  //   navigate("/projects");
  // };

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

          <div className="max-w-[440px] mb-8 text-gray-700 dark:text-gray-300">
            <p className="italic">"{quote.text}"</p>
            <p className="text-right mt-2">- {quote.author}</p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleDaftar}
              className="relative flex items-center px-6 py-2 border-1 rounded-full bg-white text-gray-950 font-semibold dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 animate-shadow-animate border-transparent"
            >
              Daftar Sekarang
            </button>

            {/* <button
              type="button"
              onClick={handleProjects}
              className="relative flex items-center px-6 py-2 border-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 border-transparent"
            >
              Proyek Kami
            </button> */}
          </div>
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

import React, { useEffect, useRef, useState } from "react";
import Image from "../../assets/images/banner.png";
import Type from "./Type";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Banner = () => {
  const [isVisible, setIsVisible] = useState({ title: false, image: false });
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const imageElement = imageRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, title: true }));
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, image: true }));
          imageObserver.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (titleElement) {
      observer.observe(titleElement);
    }

    if (imageElement) {
      imageObserver.observe(imageElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
      if (imageElement) {
        imageObserver.unobserve(imageElement);
      }
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault(); // Prevents navigation
    toast.error("Pendaftaran belum dibuka");
  };

  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 dark:bg-bg-gray-950">
      <div className="flex flex-col lg:flex-row">
        <div
          ref={titleRef}
          className={`lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 transition-opacity duration-700 ${
            isVisible.title ? "animate-slide-bottom" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl lg:text-[48px] font-semibold leading-none mb-6 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            Creative Student Association
          </h1>

          <div className="max-w-[440px] text-3xl font-medium mb-8 text-blue-500">
            <Type />
          </div>
          <Link
            to="#"
            onClick={handleClick}
            className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group cursor-pointer"
          >
            <span className="w-40 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-blue-600 opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-gray-900 dark:text-gray-100 transition-colors duration-200 ease-in-out group-hover:text-gray-100">
              Register Now
            </span>
            <span className="absolute inset-0 border-2 border-blue-600 rounded-full"></span>
          </Link>
        </div>
        <div
          ref={imageRef}
          className={`flex-1 lg:flex justify-center items-center mt-8 lg:mt-0 transition-opacity duration-700 ${
            isVisible.image ? "animate-zoom-in" : "opacity-0"
          }`}
        >
          <img src={Image} alt="Banner" className="max-w-full h-auto object-cover lg:w-[80%]" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

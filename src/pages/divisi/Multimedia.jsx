import React, { useEffect, useRef, useState } from "react";
import Image from "../../assets/images/divisi/multimedia.svg";

const DivisiMultimedia = () => {
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
            Divisi Multimedia
          </h1>
        </div>
        <div
          ref={imageRef}
          className={`flex-1 lg:flex justify-center items-center mt-8 lg:mt-0 transition-opacity duration-700 ${
            isVisible.image ? "animate-zoom-in" : "opacity-0"
          }`}
        >
          <img
            src={Image}
            alt="DivisiMultimedia"
            className="max-w-full h-auto object-cover lg:w-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default DivisiMultimedia;

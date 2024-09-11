import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import slide_image_1 from "./../../assets/images/kegiatan/kegiatan_1.jpg";
import slide_image_2 from "./../../assets/images/kegiatan/kegiatan_2.jpg";
import slide_image_3 from "./../../assets/images/kegiatan/kegiatan_3.jpg";
import slide_image_4 from "./../../assets/images/kegiatan/kegiatan_4.jpg";
import slide_image_5 from "./../../assets/images/kegiatan/kegiatan_5.jpg";
import slide_image_6 from "./../../assets/images/kegiatan/kegiatan_6.jpg";
import slide_image_7 from "./../../assets/images/kegiatan/kegiatan_7.jpg";
import slide_image_8 from "./../../assets/images/kegiatan/kegiatan_8.jpg";
import slide_image_9 from "./../../assets/images/kegiatan/kegiatan_9.jpg";
import slide_image_10 from "./../../assets/images/kegiatan/kegiatan_10.jpg";

function RecentActivities() {
  const slides = [
    {
      url: slide_image_1,
      title: "Kegiatan 1",
      description: "Deskripsi Kegiatan 1",
    },
    {
      url: slide_image_2,
      title: "Kegiatan 2",
      description: "Deskripsi Kegiatan 2",
    },
    {
      url: slide_image_3,
      title: "Kegiatan 3",
      description: "Deskripsi Kegiatan 3",
    },
    {
      url: slide_image_4,
      title: "Kegiatan 4",
      description: "Deskripsi Kegiatan 4",
    },
    {
      url: slide_image_5,
      title: "Kegiatan 5",
      description: "Deskripsi Kegiatan 5",
    },
    {
      url: slide_image_6,
      title: "Kegiatan 6",
      description: "Deskripsi Kegiatan 6",
    },
    {
      url: slide_image_7,
      title: "Kegiatan 7",
      description: "Deskripsi Kegiatan 7",
    },
    {
      url: slide_image_8,
      title: "Kegiatan 8",
      description: "Deskripsi Kegiatan 8",
    },
    {
      url: slide_image_9,
      title: "Kegiatan 9",
      description: "Deskripsi Kegiatan 9",
    },
    {
      url: slide_image_10,
      title: "Kegiatan 10",
      description: "Deskripsi Kegiatan 10",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Event handler untuk swipe di perangkat mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4 relative">
      <div
        className="relative w-full h-[400px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <div
            className="hidden lg:block text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={prevSlide}
          >
            <BsChevronCompactLeft size={30} />
          </div>
          <div
            className="hidden lg:block text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={nextSlide}
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
        <div className="overflow-hidden w-full h-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-none w-full lg:w-[33.333%] p-2">
                <div
                  style={{ backgroundImage: `url(${slide.url})` }}
                  className="relative w-full h-[300px] bg-center bg-cover rounded-lg"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                    <p className="text-white text-lg font-bold mb-2">{slide.title}</p>
                    <p className="text-gray-100 text-sm">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer transition-all duration-300 ${
                currentIndex === slideIndex ? "text-blue-600" : "text-gray-400"
              } hover:text-blue-400`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentActivities;

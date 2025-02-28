import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import slide_image_1 from "./../../assets/images/kegiatan/kegiatan_1.jpg";
import slide_image_2 from "./../../assets/images/kegiatan/kegiatan_3.jpg";
import slide_image_3 from "./../../assets/images/kegiatan/kegiatan_6.jpg";
import slide_image_4 from "./../../assets/images/kegiatan/kegiatan_9.jpg";
import slide_image_5 from "./../../assets/images/kegiatan/kegiatan_10.jpg";

function Kegiatan() {
  const slides = [
    {
      url: slide_image_1,
      title: "",
      description: "",
    },
    {
      url: slide_image_2,
      title: "",
      description: "",
    },
    {
      url: slide_image_3,
      title: "",
      description: "",
    },
    {
      url: slide_image_4,
      title: "",
      description: "",
    },
    {
      url: slide_image_5,
      title: "",
      description: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Gunakan useCallback untuk membuat nextSlide tetap stabil
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Slide berubah setiap 3 detik

    return () => clearInterval(interval); // Hentikan interval saat component unmount
  }, [nextSlide]);

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
    <div
      className="max-w-[1200px] h-[650px] w-full m-auto py-16 px-4 relative group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <p className="text-white text-2xl font-bold mb-2">{slides[currentIndex].title}</p>
            <p className="text-gray-100 text-lg">{slides[currentIndex].description}</p>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
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
  );
}

export default Kegiatan;

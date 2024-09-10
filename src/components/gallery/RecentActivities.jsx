import React, { useState } from "react";
import slide_image_1 from "./../../assets/images/kegiatan/kegiatan_1.jpg";
import slide_image_2 from "./../../assets/images/kegiatan/kegiatan_2.jpg";
import slide_image_3 from "./../../assets/images/kegiatan/kegiatan_3.jpg";
import slide_image_4 from "./../../assets/images/kegiatan/kegiatan_4.jpg";
import slide_image_5 from "./../../assets/images/kegiatan/kegiatan_5.jpg";
import slide_image_6 from "./../../assets/images/kegiatan/kegiatan_6.jpg";
import slide_image_7 from "./../../assets/images/kegiatan/kegiatan_7.jpg";
import slide_image_8 from "./../../assets/images/kegiatan/kegiatan_8.jpg";
import { RxDotFilled } from "react-icons/rx";

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
      title: "Kegiatan 5",
      description: "Deskripsi Kegiatan 5",
    },
    {
      url: slide_image_7,
      title: "Kegiatan 5",
      description: "Deskripsi Kegiatan 5",
    },
    {
      url: slide_image_8,
      title: "Kegiatan 5",
      description: "Deskripsi Kegiatan 5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesPerView = 4;
  const totalSlides = slides.length;

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4 relative">
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-none w-full lg:w-[25%] p-2">
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
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-blue-500" : "text-gray-400"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivities;

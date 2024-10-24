import React, { useState } from "react";
import "aos/dist/aos.css";
import { divisions } from "../../utils";

const DivisiCsa = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 mb-8">
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {divisions.map((division, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-950 rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="1000"
          >
            <div
              className="cursor-pointer flex items-center justify-between p-4 bg-blue-500 text-gray-100"
              onClick={() => toggleAccordion(index)}
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <h3 className="text-xl font-semibold">{division.title}</h3>
              <span className="text-2xl">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div
                className="p-4 transition-all duration-300 ease-in-out flex flex-col sm:flex-row"
                data-aos="fade-in"
                data-aos-duration="500"
              >
                <div className="sm:w-1/4 w-1/3 mx-auto">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="w-full h-auto object-contain rounded-lg"
                    data-aos="flip-left"
                    data-aos-duration="500"
                  />
                </div>
                <div className="sm:w-2/3 w-full sm:pl-6 mt-4 sm:mt-0">
                  <p className="text-gray-700 dark:text-gray-300">{division.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DivisiCsa;

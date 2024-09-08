import React, { useEffect, useRef, useState } from "react";

const TimKami = () => {
  const [isVisible, setIsVisible] = useState({ title: false, description: false, cards: false });
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;
    const cardsElement = cardsRef.current;

    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, title: true }));
          titleObserver.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    const descriptionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, description: true }));
          descriptionObserver.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, cards: true }));
          cardsObserver.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (titleElement) {
      titleObserver.observe(titleElement);
    }
    if (descriptionElement) {
      descriptionObserver.observe(descriptionElement);
    }
    if (cardsElement) {
      cardsObserver.observe(cardsElement);
    }

    return () => {
      if (titleElement) {
        titleObserver.unobserve(titleElement);
      }
      if (descriptionElement) {
        descriptionObserver.unobserve(descriptionElement);
      }
      if (cardsElement) {
        cardsObserver.unobserve(cardsElement);
      }
    };
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2
            ref={titleRef}
            className={`text-3xl font-semibold text-gray-800 dark:text-gray-200 transition-opacity duration-700 ${
              isVisible.title ? "animate-slide-bottom" : "opacity-0"
            }`}
          >
            Tim Kami
          </h2>
          <p
            ref={descriptionRef}
            className={`mt-4 text-gray-600 dark:text-gray-300 transition-opacity duration-700 ${
              isVisible.description ? "animate-slide-bottom" : "opacity-0"
            }`}
          >
            Tim ThievGuide terdiri dari para mahasiswa yang berdedikasi untuk menyediakan layanan
            konsultasi, joki, dan kursus berkualitas, membantu Anda meraih kesuksesan akademik.
          </p>
        </div>
        <div
          ref={cardsRef}
          className={`mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 ${
            isVisible.cards ? "animate-zoom-in" : "opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Guide 1</h3>
            <p className="text-gray-600 dark:text-gray-300">Web Developer</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Menyediakan kursus dan layanan joki untuk pembelajaran praktikum.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Guide 2</h3>
            <p className="text-gray-600 dark:text-gray-300">Frontend Developer</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Menyediakan kursus dan layanan joki dalam kategori IoT.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Guide 3</h3>
            <p className="text-gray-600 dark:text-gray-300">UI/UX Designer</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Menyediakan layanan joki untuk pembelajaran teori.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimKami;

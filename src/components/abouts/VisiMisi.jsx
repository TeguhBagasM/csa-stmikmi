import React, { useEffect, useRef, useState } from "react";

const VisiMisi = () => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    cards: false,
  });
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const cardsElement = cardsRef.current;

    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, title: true }));
          titleObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, cards: true }));
          cardsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (titleElement) {
      titleObserver.observe(titleElement);
    }
    if (cardsElement) {
      cardsObserver.observe(cardsElement);
    }

    return () => {
      if (titleElement) {
        titleObserver.unobserve(titleElement);
      }
      if (cardsElement) {
        cardsObserver.unobserve(cardsElement);
      }
    };
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2
            ref={titleRef}
            className={`text-4xl font-bold text-gray-800 dark:text-gray-100 transition-transform duration-1000 ${
              isVisible.title ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Visi dan Misi
          </h2>
        </div>
        <div
          ref={cardsRef}
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 transition-transform duration-1000 ${
            isVisible.cards ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Visi</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Menjadi penggerak utama dalam menginspirasi dan membangun komunitas mahasiswa kreatif
              yang berdedikasi untuk mendorong inovasi, kolaborasi lintas disiplin, dan pengembangan
              kreatif yang berkelanjutan. Menuju go internasional.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Misi</h3>
            <ol className="mt-4 text-gray-600 dark:text-gray-400 text-left list-decimal list-inside">
              <li>Mengembangkan wadah kolaborasi untuk pertukaran ide antar mahasiswa kreatif.</li>
              <li>Memfasilitasi pengembangan kreativitas dan acara inspiratif.</li>
              <li>Mendorong inovasi berkelanjutan dengan dampak positif bagi masyarakat.</li>
              <li>Memperluas jaringan dan kemitraan dengan industri kreatif serta lembaga terkait.</li>
              <li>Menggalang kesadaran sosial melalui kreativitas untuk isu-isu sosial dan budaya.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;

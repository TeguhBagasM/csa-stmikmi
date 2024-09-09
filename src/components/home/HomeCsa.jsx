import React, { useEffect, useRef, useState } from "react";

const HomeCsa = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-4 py-8 transition-opacity duration-700 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <h2
        className={`text-4xl text-gray-900 dark:text-gray-100 font-bold text-center mb-10 transition-opacity duration-700 ${
          isVisible ? "animate-slide-bottom" : "opacity-0"
        }`}
      >
        Mengapa CSA?
      </h2>
      <div
        className={`bg-white dark:bg-gray-900 border border-blue-500 rounded-lg shadow-lg p-6 mx-auto max-w-4xl transition-opacity duration-700 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <p className="text-gray-700 dark:text-gray-300">
          CSA (Creative Student Association) adalah pilihan utama bagi mahasiswa yang ingin mendalami
          IT dan kreativitas. Kami menyediakan platform untuk inovasi, kolaborasi lintas disiplin, dan
          pengembangan keterampilan dalam Pemrograman, Multimedia, IoT, dan Game. Dengan dukungan dari
          STMIK Mardira Indonesia, kami berkomitmen untuk memfasilitasi pertukaran ide dan memberikan
          dampak positif bagi masyarakat serta memperluas jaringan dengan industri kreatif.
          Bergabunglah dengan kami untuk mencapai potensi Anda secara global.
        </p>
      </div>
    </section>
  );
};

export default HomeCsa;

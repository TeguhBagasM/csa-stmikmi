import React, { useEffect, useRef, useState } from "react";

const SejarahCsa = () => {
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
    <section className="bg-gray-100 dark:bg-gray-950 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2
            ref={titleRef}
            className={`text-4xl font-bold text-gray-800 dark:text-gray-100 transition-transform duration-1000 ${
              isVisible.title ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Tentang CSA
          </h2>
        </div>
        <div
          ref={cardsRef}
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 transition-transform duration-1000 ${
            isVisible.cards ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Apa itu CSA?</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              CSA (Creative Student Association) yaitu, suatu organisasi berbasis IT yang bertempat di
              STMIK Mardira Indonesia. Organisasi ini menyangkut semua hal tentang IT seperti
              Pemrograman, Multimedia, IOT dan Game.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Sejarah CSA</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Berawal dari non-aktifnya Unit Kegiatan Mahasiswa yang berfokus pada Pemrograman yaitu
              HMJ IF. Maka di akhir tahun 2017, sekumpulan Mahasiswa kreatif mempunyai ide untuk
              mengaktifkan organisasi yang berfokus pada Pemrograman dan Informatika. Hingga saat ini
              organisasi tersebut kita kenal sebagai CSA (Creative Student Association), yang didirikan
              oleh mahasiswa-mahasiswi kreatif yang dikenal sebagai para Founder CSA. Organisasi ini
              pun mendapat dorongan dari Pimpinan STMIK Mardira Indonesia untuk didirikan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SejarahCsa;

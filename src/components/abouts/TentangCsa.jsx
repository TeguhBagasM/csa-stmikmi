import React from "react";

const TentangCsa = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Tentang CSA
          </h2>
        </div>
        <div data-aos="fade-up" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="fade-right"
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Apa itu CSA?</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              CSA (Creative Student Association) yaitu, suatu organisasi berbasis IT yang bertempat di
              STMIK Mardira Indonesia. Organisasi ini menyangkut semua hal tentang IT seperti
              Pemrograman, Multimedia, IOT dan Game.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Sejarah CSA</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Berawal dari non-aktifnya Unit Kegiatan Mahasiswa yang berfokus pada Pemrograman yaitu
              HMJ IF. Maka di akhir tahun 2017, sekumpulan Mahasiswa kreatif mempunyai ide untuk
              mengaktifkan organisasi yang berfokus pada Pemrograman dan Informatika.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangCsa;

import React from "react";
import { FaLightbulb, FaUsers, FaProjectDiagram, FaGlobe } from "react-icons/fa";

const Benefit = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 data-aos="zoom-in" className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
          Benefit di CSA
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Benefit 1 */}
          <div
            data-aos="fade-right"
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-700"
          >
            <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Inovasi Tanpa Batas
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              CSA memfasilitasi mahasiswa untuk berpikir kreatif dan mendorong inovasi untuk dampak
              positif serta menghasilkan ide-ide baru.
            </p>
          </div>

          {/* Benefit 2 */}
          <div
            data-aos="fade-up"
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-700"
          >
            <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Komunitas Kreatif
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bergabung dengan komunitas mahasiswa yang berdedikasi dalam bidang IT dan inovasi, serta
              membangun jaringan yang luas.
            </p>
          </div>

          {/* Benefit 3 */}
          <div
            data-aos="fade-up"
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-700"
          >
            <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
              <FaProjectDiagram />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Proyek Kolaboratif
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ikuti proyek yang memungkinkan kolaborasi antar mahasiswa dengan berbagai disiplin ilmu.
            </p>
          </div>

          {/* Benefit 4 */}
          <div
            data-aos="fade-left"
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-700"
          >
            <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Pengalaman Global
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Kesempatan untuk memperluas jaringan internasional dan berpartisipasi dalam kolaborasi
              serta magang di industri kreatif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;

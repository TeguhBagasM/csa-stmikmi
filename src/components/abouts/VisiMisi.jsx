import React from "react";

const VisiMisi = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Visi dan Misi
          </h2>
        </div>
        <div data-aos="fade-up" className="mt-12 mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="fade-right"
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Visi</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              MMenjadikan CSA sebagai komunitas kreatif dan inovatif yang mendorong kolaborasi lintas
              divisi untuk menghasilkan karya unggulan yang berdampak positif, relevan dengan
              perkembangan teknologi, serta memberikan kontribusi nyata bagi kampus, masyarakat, dan
              dunia industri.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Misi</h3>
            <ol className="mt-4 text-gray-600 dark:text-gray-400 text-left list-decimal list-inside">
              <li>Mengembangkan Potensi Anggota secara Kreatif</li>
              <li>
                Mendorong Inovasi Lewat Proyek Kolaboratif: Menginisiasi proyek lintas divisi seperti
                pengembangan aplikasi kreatif, game edukasi, multimedia interaktif, atau solusi IoT.
              </li>
              <li>
                Memperkenalkan Karya Anggota: Mengadakan kegiatan seperti pameran teknologi, lomba atau
                kolaborasi dengan komunitas lain agar inovasi anggota CSA ini dikenal lebih luas.
              </li>
              <li>
                Menciptakan Lingkungan Kolaboratif yang Inspiratif: Membentuk budaya komunitas yang
                terbuka untuk eksplorasi ide-ide baru, diskusi kreatif, dan kerja sama antaranggota.
              </li>
              <li>
                Menguatkan Solidaritas Antaranggota: mengoptimalkan kegiatan internal seperti diskusi
                lintas divisi dan mendorong kerjasama yang lebih solid.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;

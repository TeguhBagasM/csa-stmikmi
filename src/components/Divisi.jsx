import React, { useState } from "react";
import programmingImg from "../assets/images/divisi/pemrograman.png"; // Ganti dengan path gambar
import iotImg from "../assets/images/divisi/iot.png";
import multimediaImg from "../assets/images/divisi/mulmed.png";
import gameDevImg from "../assets/images/divisi/game.jpg";

const divisions = [
  {
    title: "Divisi Pemrograman",
    image: programmingImg,
    description:
      "Divisi Pemrograman berfokus pada pengembangan keterampilan coding dan pembuatan aplikasi berbasis web. Divisi ini belajar berbagai bahasa pemrograman seperti PHP, Javascript, dan lainnya.",
  },
  {
    title: "Divisi IoT",
    image: iotImg,
    description:
      "Divisi IoT (Internet of Things) mengeksplorasi teknologi untuk menghubungkan perangkat fisik dengan internet. Fokusnya adalah pada pengembangan sistem otomatisasi dan inovasi berbasis IoT seperti smart home dan smart city.",
  },
  {
    title: "Divisi Multimedia",
    image: multimediaImg,
    description:
      "Divisi Multimedia bertujuan mengembangkan keterampilan desain grafis, animasi, fotografi, dan video editing. Anggota belajar menggunakan berbagai tools kreatif untuk membuat konten digital.",
  },
  {
    title: "Divisi Game",
    image: gameDevImg,
    description:
      "Divisi Game berfokus pada pembuatan video game, mulai dari desain karakter hingga pemrograman game menggunakan game engine seperti Unity dan Unreal Engine.",
  },
];

const DivisiCsa = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl text-gray-900 dark:text-gray-100 font-bold text-center mb-10">
        Divisi CSA
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {divisions.map((division, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-950 rounded-lg overflow-hidden">
            <div
              className="cursor-pointer flex items-center justify-between p-4 bg-blue-500 text-gray-100"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-xl font-semibold">{division.title}</h3>
              <span className="text-2xl">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="p-4 transition-all duration-300 ease-in-out flex flex-col sm:flex-row">
                <div className="sm:w-1/4 w-1/3 mx-auto">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="w-full h-auto object-contain rounded-lg"
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

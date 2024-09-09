import React from "react";
import Image from "../../assets/images/divisi/multimedia.svg";

const DivisiMultimedia = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 dark:bg-gray-950">
      <div className="flex flex-col lg:flex-row">
        <div
          data-aos="slide-bottom"
          className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0"
        >
          <h1
            data-aos="zoom-in"
            className="text-4xl lg:text-[48px] font-semibold leading-none mb-6 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 bg-clip-text text-transparent"
          >
            Multimedia
          </h1>
          <p data-aos="zoom-in" className="max-w-[440px] mb-8 dark:text-gray-300">
            Divisi Multimedia bertujuan mengembangkan keterampilan desain grafis, animasi, fotografi,
            dan video editing. Anggota belajar menggunakan berbagai tools kreatif untuk membuat konten
            digital.
          </p>
        </div>

        <div data-aos="zoom-in" className="flex-1 lg:flex justify-center items-center lg:mt-0">
          <img
            src={Image}
            alt="DivisiMultimedia"
            className="max-w-full h-auto object-cover lg:w-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default DivisiMultimedia;

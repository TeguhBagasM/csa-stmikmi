import React from "react";
import ScrollToTopButton from "../components/layouts/ScrollToTopButton";
// import DivisiCsa from "../components/home/Divisi";
import Banner from "../components/home/Banner";
import HomeCsa from "../components/home/HomeCsa";
import VisiMisi from "../components/abouts/VisiMisi";
import TentangCsa from "../components/abouts/TentangCsa";
import DivisiPemrograman from "../components/divisi/Pemrograman";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DivisiIot from "../components/divisi/Iot";
import DivisiMultimedia from "../components/divisi/Multimedia";
import DivisiGame from "../components/divisi/Game";
import "swiper/css"; // Gaya dasar Swiper
import "swiper/css/navigation"; // Gaya untuk navigasi
import "swiper/css/pagination"; // Gaya untuk pagination
import DivisiCsa from "../components/home/DivisiCsa";
import Divisi from "../components/home/Divisi";
import Kegiatan from "../components/gallery/Kegiatan";
import RecentActivities from "../components/gallery/RecentActivities";
import Benefit from "../components/home/Benefit";

const Home = () => {
  return (
    <div className="min-h-[1200px]">
      <Banner />
      <HomeCsa />
      <Benefit />
      <Kegiatan />
      <RecentActivities />
      <TentangCsa />
      <VisiMisi />
      <DivisiCsa />
      <Swiper
        modules={[Navigation, Pagination]} // Modules Swiper untuk pagination dan navigation
        spaceBetween={30} // Jarak antar slide
        slidesPerView={1} // Menampilkan 1 slide dalam satu waktu
        // navigation // Menampilkan tombol navigasi next/prev
        pagination={{ clickable: true }} // Pagination dengan dot yang bisa di-klik
      >
        <SwiperSlide>
          <DivisiPemrograman />
        </SwiperSlide>
        <SwiperSlide>
          <DivisiMultimedia />
        </SwiperSlide>
        <SwiperSlide>
          <DivisiIot />
        </SwiperSlide>
        <SwiperSlide>
          <DivisiGame />
        </SwiperSlide>
      </Swiper>
      <Divisi />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

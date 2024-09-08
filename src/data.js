import KursusCss from "./assets/img/kursus/css.png";
import KursusLaravel from "./assets/img/kursus/laravel-course.png";
import KursusIot from "./assets/img/kursus/iot.png";
import KursusBootstrap from "./assets/img/kursus/bootstrap.png";
import KursusGit from "./assets/img/kursus/git.png";

import JokiPhp from "./assets/img/joki/php.jpg";
import JokiStatistika from "./assets/img/joki/statistika.png";
import JokiLaravel from "./assets/img/joki/laravel.png";
import JokiPpa from "./assets/img/joki/ppa.jpeg";

import PembuatCowo from "./assets/img/pembuat/cowo.svg";
import PembuatCewe from "./assets/img/pembuat/cewe.svg";

export const servicesData = [
  {
    id: 1,
    slug: "konsultasi-php",
    layanan: "Konsultasi",
    pembelajaran: "Praktikum",
    category: "PHP",
    longText: "Tugas Program PHP Sederhana",
    description:
      "Layanan konsultasi untuk tugas pemrograman PHP, mulai dari tugas sederhana hingga kompleks.",
    image: JokiPhp,
    imageLg: JokiPhp,
    price: "0",
    finalPrice: "20000",
    rating: 4.8,
    partisipasi: 4,
    isPopular: true,
    pembuat: {
      image: PembuatCowo,
      name: "Guide 1",
      phone: "+628986140727",
    },
  },
  {
    id: 2,
    slug: "kursus-iot",
    layanan: "Kursus",
    pembelajaran: "Praktikum",
    category: "IOT Dasar",
    longText: "IOT Untuk Pemula",
    description:
      "Pelajari dasar-dasar Internet of Things (IOT) dalam kursus ini, dirancang untuk pemula yang ingin memulai dalam dunia IOT.",
    image: KursusIot,
    imageLg: KursusIot,
    durasi: "2",
    price: "15000",
    rating: 4.7,
    partisipasi: 2,
    isPopular: true,
    pembuat: {
      image: PembuatCewe,
      name: "Guide 2",
      phone: "+6281214585131",
    },
  },
  {
    id: 3,
    slug: "joki-statistika",
    layanan: "Joki",
    pembelajaran: "Teori",
    category: "Statistika",
    longText: "Tugas dan Kuis Statistika",
    description:
      "Layanan joki untuk tugas dan kuis statistika, membantu Anda menyelesaikan soal-soal statistik dengan akurasi tinggi.",
    image: JokiStatistika,
    imageLg: JokiStatistika,
    price: "50000",
    finalPrice: "300000",
    rating: 4.8,
    partisipasi: 7,
    isPopular: true,
    pembuat: {
      image: PembuatCowo,
      name: "Guide 3",
      phone: "+6282118290579",
    },
  },
  {
    id: 4,
    slug: "joki-ppa",
    layanan: "Joki",
    pembelajaran: "Praktikum",
    category: "PPA",
    longText: "Paket Program Aplikasi",
    description:
      "Layanan joki untuk kategori Paket Program Aplikasi, membantu Anda menyelesaikan tugas atau kuis dengan rapi.",
    image: JokiPpa,
    imageLg: JokiPpa,
    price: "40000",
    finalPrice: "200000",
    rating: 4.8,
    partisipasi: 7,
    isPopular: true,
    pembuat: {
      image: PembuatCewe,
      name: "Guide 4",
      phone: "+6289668842074",
    },
  },
  {
    id: 5,
    slug: "kursus-css-dasar",
    layanan: "Kursus",
    pembelajaran: "Praktikum",
    category: "CSS Dasar",
    longText: "CSS Untuk Pemula",
    description:
      "Kursus CSS untuk pemula yang ingin mempelajari dasar-dasar CSS dan cara menggunakannya untuk membuat tampilan website yang menarik.",
    image: KursusCss,
    imageLg: KursusCss,
    durasi: "2",
    price: "10000",
    rating: 4.8,
    partisipasi: 40,
    pembuat: {
      image: PembuatCowo,
      name: "Guide 1",
      phone: "+628986140727",
    },
  },
  {
    id: 6,
    slug: "kursus-laravel-dasar",
    layanan: "Kursus",
    pembelajaran: "Praktikum",
    category: "Laravel Dasar",
    longText: "Laravel Untuk Pemula",
    description:
      "Kursus ini akan mengajarkan dasar-dasar Laravel, salah satu framework PHP yang paling populer, cocok untuk pemula.",
    image: KursusLaravel,
    imageLg: KursusLaravel,
    durasi: "2",
    price: "15000",
    rating: 4.8,
    partisipasi: 10,
    pembuat: {
      image: PembuatCowo,
      name: "Guide 1",
      phone: "+628986140727",
    },
  },

  {
    id: 7,
    slug: "kursus-git-dasar",
    layanan: "Kursus",
    pembelajaran: "Praktikum",
    category: "GIT Dasar",
    longText: "GIT Untuk Pemula",
    description:
      "Kursus ini memperkenalkan konsep dasar Git, alat kontrol versi yang esensial bagi pengembang perangkat lunak.",
    image: KursusGit,
    imageLg: KursusGit,
    durasi: "2",
    price: "10000",
    rating: 4.7,
    partisipasi: 3,
    pembuat: {
      image: PembuatCowo,
      name: "Guide 1",
      phone: "+628986140727",
    },
  },
  {
    id: 8,
    slug: "kursus-bootstrap-dasar",
    layanan: "Kursus",
    pembelajaran: "Praktikum",
    category: "Bootstrap Dasar",
    longText: "Bootstrap Untuk Pemula",
    description:
      "Pelajari cara menggunakan Bootstrap dari dasar, framework CSS paling populer untuk membuat antarmuka web yang responsif.",
    image: KursusBootstrap,
    imageLg: KursusBootstrap,
    durasi: "2",
    price: "15000",
    rating: 4.7,
    partisipasi: 4,
    pembuat: {
      image: PembuatCowo,
      name: "Guide 1",
      phone: "+628986140727",
    },
  },
  {
    id: 9,
    slug: "joki-laravel",
    layanan: "Joki",
    pembelajaran: "Praktikum",
    category: "Laravel",
    longText: "Tugas Laravel",
    description:
      "Layanan joki untuk tugas pemrograman Laravel, mulai dari tugas sederhana hingga kompleks, dengan harga terjangkau.",
    image: JokiLaravel,
    imageLg: JokiLaravel,
    price: "100000",
    finalPrice: "400000",
    rating: 4.8,
    partisipasi: 6,
    pembuat: {
      image: PembuatCowo,
      name: "Guide 1",
      phone: "+628986140727",
    },
  },
];

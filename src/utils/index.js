import programmingImg from "../assets/images/divisi/pemrograman.png";
import iotImg from "../assets/images/divisi/iot.png";
import multimediaImg from "../assets/images/divisi/mulmed.png";
import gameDevImg from "../assets/images/divisi/game.jpg";

const generateQuotes = () => [
  {
    text: "Kesuksesan seringkali ditemukan melalui banyak percobaan dan kegagalan.",
    author: "Inspirator",
  },
  {
    text: "Apa pun tantangannya, selalu ada cara untuk mengatasi dan berhasil. Yang penting adalah tidak menyerah.",
    author: "Pemikir Hebat",
  },
  {
    text: "Lebih baik menjadi seseorang yang memiliki nilai daripada hanya mengejar kesuksesan.",
    author: "Pencerah",
  },
  {
    text: "Untuk mencapai hasil yang luar biasa, cintai apa yang Anda kerjakan.",
    author: "Pelopor Inovasi",
  },
  {
    text: "Ide-ide baru tidak selalu langsung menunjukkan hasil yang baik.",
    author: "Pencipta Ide",
  },
  {
    text: "Dimanapun Anda berada, jadilah yang terbaik dan berikan yang terbaik dari diri Anda.",
    author: "Motivator",
  },
];

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

export { generateQuotes, divisions };

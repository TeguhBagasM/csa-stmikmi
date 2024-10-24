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

const projects = [
  {
    title: "Noteverse",
    description:
      "Noteverse adalah aplikasi catatan online yang dibangun dengan Next.js, TypeScript, dan Prisma sebagai ORM, menggunakan PostgreSQL untuk database.",
    tech: "Next.js / TypeScript / PostgreSQL / Prisma",
    demoLink: "#",
    githubLink: "#",
    image: programmingImg,
    id: "noteverse", // menambahkan id untuk routing
  },
  {
    title: "CSA STMIK-MI",
    description:
      "CSA (Creative Student Association) adalah organisasi berbasis TI yang terletak di STMIK Mardira Indonesia. Organisasi ini mencakup semua aspek TI.",
    tech: "React.js / Tailwind",
    demoLink: "#",
    githubLink: "#",
    image: iotImg,
    id: "csa-web", // menambahkan id untuk routing
  },
];

const projectsData = {
  noteverse: {
    title: "Noteverse",
    description:
      "Noteverse adalah aplikasi catatan online yang dibangun dengan Next.js, TypeScript, dan Prisma sebagai ORM, menggunakan PostgreSQL untuk database. Aplikasi ini memungkinkan pengguna untuk membuat, mengedit, dan mengorganisir catatan dengan mudah dan efisien.",
    image: programmingImg,
    demoLink: "#",
    githubLink: "#",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
    features: [
      "Autentikasi pengguna",
      "Real-time syncing",
      "Markdown support",
      "File attachment",
      "Collaborative editing",
      "Dark mode support",
    ],
    team: [
      { name: "John Doe", role: "Lead Developer" },
      { name: "Jane Smith", role: "UI/UX Designer" },
      { name: "Mike Johnson", role: "Backend Developer" },
    ],
    timeline: [
      { date: "Jan 2024", milestone: "Project Initiation" },
      { date: "Feb 2024", milestone: "MVP Development" },
      { date: "Mar 2024", milestone: "Beta Testing" },
      { date: "Apr 2024", milestone: "Public Release" },
    ],
    challenges: [
      "Implementing real-time collaboration",
      "Optimizing performance untuk large notes",
      "Handling offline functionality",
      "Ensuring data security",
    ],
  },
  "csa-web": {
    title: "CSA STMIK-MI",
    description:
      "CSA (Creative Student Association) Website adalah platform digital yang merepresentasikan organisasi IT di STMIK Mardira Indonesia. Website ini dibangun dengan teknologi modern dan menyajikan informasi komprehensif tentang kegiatan, program, dan prestasi organisasi.",
    image: iotImg,
    demoLink: "#",
    githubLink: "#",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Responsive design",
      "Dynamic content management",
      "Event calendar",
      "Member registration",
      "Project showcase",
      "Newsletter subscription",
    ],
    team: [
      { name: "Alex Brown", role: "Frontend Developer" },
      { name: "Sarah Wilson", role: "Content Manager" },
      { name: "David Lee", role: "Backend Developer" },
    ],
    timeline: [
      { date: "Nov 2023", milestone: "Design Phase" },
      { date: "Dec 2023", milestone: "Frontend Development" },
      { date: "Jan 2024", milestone: "Backend Integration" },
      { date: "Feb 2024", milestone: "Launch" },
    ],
    challenges: [
      "Creating intuitive navigation",
      "Optimizing image loading",
      "Implementing responsive design",
      "Managing dynamic content",
    ],
  },
};

export { generateQuotes, divisions, projects, projectsData };

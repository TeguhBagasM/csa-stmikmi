import programmingImg from "../assets/images/divisi/pemrograman.png";
import iotImg from "../assets/images/divisi/iot.png";
import multimediaImg from "../assets/images/divisi/mulmed.png";
import gameDevImg from "../assets/images/divisi/game.jpg";
import NoteverseImg from "../assets/images/projects/noteverse.png";
import ThievshopImg from "../assets/images/projects/thievshop.png";

const generateQuotes = () => [
  {
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Don't compare yourself with anyone in this world. If you do so, you are insulting yourself.",
    author: "Bill Gates",
  },
  {
    text: "The question of whether computers can think is like the question of whether submarines can swim.",
    author: "Edsger Dijkstra",
  },
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    text: "Sometimes it's the people no one imagines anything of who do the things that no one can imagine.",
    author: "Alan Turing",
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
    demoLink: "https://noteverse-chi.vercel.app",
    githubLink: "https://github.com/TeguhBagasM/noteverse",
    image: NoteverseImg,
    id: "noteverse", // menambahkan id untuk routing
  },
  {
    title: "ThievShop",
    description:
      "Thievshop adalah landing page e-commerce modern yang dibuat menggunakan React.js dan Vite, dengan Tailwind CSS untuk styling.",
    tech: "React.js / Vite / Tailwind",
    demoLink: "https://thievshop.vercel.app",
    githubLink: null,
    image: ThievshopImg,
    id: "thievshop", // menambahkan id untuk routing
  },
];

const projectsData = {
  noteverse: {
    title: "Noteverse",
    description:
      "Noteverse adalah aplikasi catatan online yang dibangun dengan Next.js, TypeScript, dan Prisma sebagai ORM, menggunakan PostgreSQL untuk database. Aplikasi ini memungkinkan pengguna untuk membuat, mengedit, dan mengorganisir catatan dengan mudah dan efisien.",
    image: NoteverseImg,
    demoLink: "https://noteverse-chi.vercel.app",
    githubLink: "https://github.com/TeguhBagasM/noteverse",
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
  thievshop: {
    title: "Thievshop",
    description:
      "Thievshop adalah landing page e-commerce modern yang dibuat menggunakan React.js dan Vite, dengan Tailwind CSS untuk styling. Halaman ini dirancang untuk memberikan pengguna pengalaman belanja yang elegan dan lancar. Thievshop menekankan kesederhanaan dan kenyamanan, dengan tata letak yang bersih dan navigasi yang intuitif.",
    image: ThievshopImg,
    demoLink: "https://thievshop.vercel.app",
    githubLink: null,
    tech: ["React.js", "Tailwind CSS", "Vite"],
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

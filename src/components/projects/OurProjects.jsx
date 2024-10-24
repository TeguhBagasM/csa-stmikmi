import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import programmingImg from "../../assets/images/divisi/pemrograman.png";
import iotImg from "../../assets/images/divisi/iot.png";

const OurProjects = () => {
  const navigate = useNavigate();

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

  const handleBack = () => {
    navigate("/");
  };

  const handleDetail = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-950 py-16 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <IoArrowBack className="text-xl" />
        <span>Kembali</span>
      </button>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12">
            Our Projects
          </h2>
        </div>

        <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                {/* Overlay dengan efek slide dari atas */}
                <div className="absolute inset-x-0 -top-full h-full bg-black/50 group-hover:top-0 transition-all duration-300 ease-in-out flex items-center justify-center gap-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-full font-medium transition-colors"
                  >
                    <FiExternalLink className="text-lg" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-full font-medium transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.tech}</p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>

              {/* Lihat Detail Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleDetail(project.id)}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

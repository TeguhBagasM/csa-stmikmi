import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaCalendarAlt, FaUsers, FaLaptopCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsStack } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { projectsData } from "../../utils";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const project = projectsData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-16 px-4 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate("/projects")}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <IoArrowBack className="text-xl" />
        <span>Kembali</span>
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  <FiExternalLink className="text-lg" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  <FaGithub className="text-lg" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b dark:border-gray-800">
          {["overview", "features", "team", "timeline"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Tentang Proyek
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Challenges & Solutions
                  </h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <AiFillCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Fitur Utama
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <AiFillCheckCircle className="text-green-500 text-xl" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Tim Pengembang
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.team.map((member, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <h3 className="font-medium text-gray-800 dark:text-gray-200">{member.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "timeline" && (
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Timeline Pengembangan
                </h2>
                <div className="space-y-4">
                  {project.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <FaCalendarAlt className="text-blue-500 text-xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-200">{item.date}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-200">
                <BsStack className="text-blue-500" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUsers className="text-blue-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Team Size</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {project.team.length} Members
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLaptopCode className="text-blue-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Features</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {project.features.length} Core Features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import { ToasterProvider } from "./providers/toast-provider";

import AOS from "aos";
import "aos/dist/aos.css";
import OurProjects from "./components/projects/OurProjects";
import ProjectDetail from "./components/projects/ProjectDetail";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="max-w-full mx-auto bg-gray-100 dark:bg-gray-950 overflow-x-hidden">
      <Header />
      <ToasterProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

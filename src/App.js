import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import { ToasterProvider } from "./providers/toast-provider";
// import TentangKami from "./pages/TentangKami";
// import DivisiPemrograman from "./components/divisi/Pemrograman";
// import DivisiGame from "./components/divisi/Game";
// import DivisiIot from "./components/divisi/Iot";
// import DivisiMultimedia from "./components/divisi/Multimedia";
import AOS from "aos";
import "aos/dist/aos.css";

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
        {/* <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/divisi-pemrograman" element={<DivisiPemrograman />} />
        <Route path="/divisi-game" element={<DivisiGame />} />
        <Route path="/divisi-iot" element={<DivisiIot />} />
        <Route path="/divisi-multimedia" element={<DivisiMultimedia />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

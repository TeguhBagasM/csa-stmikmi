import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import { ToasterProvider } from "./providers/toast-provider";
import DivisiPemrograman from "./pages/divisi/Pemrograman";
import DivisiGame from "./pages/divisi/Game";
import DivisiIot from "./pages/divisi/Iot";
import DivisiMultimedia from "./pages/divisi/Multimedia";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-gray-100 dark:bg-gray-950">
      <Header />
      <ToasterProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/divisi-pemrograman" element={<DivisiPemrograman />} />
        <Route path="/divisi-game" element={<DivisiGame />} />
        <Route path="/divisi-iot" element={<DivisiIot />} />
        <Route path="/divisi-multimedia" element={<DivisiMultimedia />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

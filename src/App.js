import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import { ToasterProvider } from "./providers/toast-provider";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-gray-100 dark:bg-gray-950">
      <Header />
      <ToasterProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

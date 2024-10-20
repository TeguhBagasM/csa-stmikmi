import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";
import Logo from "../../assets/images/logo-csa.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true" ? true : false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleFollow = () => {
    window.open("https://instagram.com/csa_stmikmi", "_blank");
  };

  return (
    <header className="py-6 mb-12 border-b bg-white border-gray-300 dark:border-gray-600 dark:bg-gray-950 z-40 dark:text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-40 h-auto mt-1" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center"></nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <DarkModeSwitch enabled={darkMode} setEnabled={setDarkMode} />

          <button
            onClick={handleFollow}
            className="hidden md:flex items-center bg-blue-600 text-white py-2 px-3 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200"
          >
            <FaInstagram className="text-xl mr-2" />
            Follow Us
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={handleFollow}
              className="flex items-center text-white py-2 px-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
            >
              <FaInstagram className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

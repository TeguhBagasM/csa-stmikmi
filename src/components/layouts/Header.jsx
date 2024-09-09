import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from "react-icons/ai";
import DarkModeSwitch from "../DarkModeSwitch";
import Logo from "../../assets/images/logo-csa.png";

const Header = () => {
  // Inisialisasi darkMode dari localStorage atau default ke light mode
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true" ? true : false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Update dark mode class dan simpan status ke localStorage
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
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-40 h-auto mt-1" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className=" md:flex items-center hover:text-blue-600 transition-colors duration-200"
          >
            <AiFillHome className="mr-2 text-xl" /> Home
          </Link>
          <Link
            to="/tentang-kami"
            className="md:flex items-center hover:text-blue-600 transition-colors duration-200"
          >
            <FaInfoCircle className="mr-2 text-xl" /> About CSA
          </Link>
        </nav>

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
            {isMenuOpen ? (
              <AiOutlineClose
                onClick={toggleMenu}
                className="text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-200"
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleMenu}
                className="text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-200"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-6 px-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="flex items-center text-gray-800 dark:text-gray-200 dark:hover:text-blue-500 hover:text-blue-600 transition-colors duration-200"
              >
                <AiFillHome className="mr-2 text-xl" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/tentang-kami"
                onClick={toggleMenu}
                className="flex items-center text-gray-800 dark:text-gray-200 dark:hover:text-blue-500 hover:text-blue-600 transition-colors duration-200"
              >
                <FaInfoCircle className="mr-2 text-xl" /> About Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

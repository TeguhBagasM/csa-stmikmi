import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
import Logo from "../../assets/images/logo-csa.png";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true" ? true : false;
  });

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

  const InstagramGradientIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="20%" stopColor="#fa7e1e" />
          <stop offset="40%" stopColor="#d62976" />
          <stop offset="60%" stopColor="#962fbf" />
          <stop offset="80%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        fill="url(#instagram-gradient)"
      />
    </svg>
  );

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
            className="hidden md:flex items-center bg-gray-100 dark:bg-gray-900 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <InstagramGradientIcon />
            <span className="ml-2 text-gray-900 dark:text-white">Follow Us</span>
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={handleFollow}
              className="flex items-center bg-gray-100 dark:bg-gray-900 py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <InstagramGradientIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

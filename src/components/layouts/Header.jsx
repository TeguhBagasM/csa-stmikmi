import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaInstagram, FaLaptopCode } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from "react-icons/ai";
import DarkModeSwitch from "../DarkModeSwitch";
import Logo from "../../assets/images/logo-csa.png";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true" ? true : false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Update dark mode class and localStorage whenever darkMode state changes
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
    <header className="py-6 mb-12 border-b bg-white border-gray-300 dark:border-gray-600 dark:bg-gray-950 dark:text-white">
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
            <FaInfoCircle className="mr-2 text-xl" /> Visi dan Misi
          </Link>

          {/* Dropdown Menu Divisi */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
            >
              <FaLaptopCode className="text-xl" />
              Divisi
              {isDropdownOpen ? (
                <RiArrowUpSLine className="text-xl" />
              ) : (
                <RiArrowDownSLine className="text-xl" />
              )}
            </button>
            {/* Dropdown Items */}
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
                <li>
                  <Link
                    to="/divisi/game"
                    className="flex items-center px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white"
                  >
                    Game
                  </Link>
                </li>
                <li>
                  <Link
                    to="/divisi/pemrograman"
                    className="flex items-center px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white"
                  >
                    Pemrograman
                  </Link>
                </li>
                <li>
                  <Link
                    to="/divisi/iot"
                    className="flex items-center px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white"
                  >
                    Internet of Things
                  </Link>
                </li>
                <li>
                  <Link
                    to="/divisi/multimedia"
                    className="flex items-center px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white"
                  >
                    Multimedia
                  </Link>
                </li>
              </ul>
            )}
          </div>
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

            {/* Divisi for Mobile Menu */}
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-800 dark:text-gray-200 dark:hover:text-blue-500 hover:text-blue-600 transition-colors duration-200"
              >
                <FaLaptopCode className="text-xl mr-2" />
                Divisi
                {isDropdownOpen ? (
                  <RiArrowUpSLine className="text-xl ml-1" />
                ) : (
                  <RiArrowDownSLine className="text-xl ml-1" />
                )}
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
                  <li>
                    <Link
                      to="/divisi/game"
                      onClick={toggleMenu}
                      className="flex items-center px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white"
                    >
                      Game
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/divisi/pemrograman"
                      onClick={toggleMenu}
                      className="flex items-center px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white"
                    >
                      Pemrograman
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/divisi/iot"
                      onClick={toggleMenu}
                      className="flex items-center px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white"
                    >
                      Internet of Things
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/divisi/multimedia"
                      onClick={toggleMenu}
                      className="flex items-center px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white"
                    >
                      Multimedia
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex justify-center">
              <button
                onClick={handleFollow}
                className="flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <FaInstagram className="text-xl mr-2" />
                Follow Us
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

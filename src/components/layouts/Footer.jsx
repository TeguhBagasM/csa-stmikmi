import React from "react";
import { FaInstagram, FaFacebookF, FaEnvelope, FaHeart, FaTiktok } from "react-icons/fa";
import logo from "../../assets/images/logo-csa.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bagian Kiri */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <img src={logo} alt="Logo" className="h-12 w-auto mb-4 md:mb-0 md:mr-3" />
            <div className="text-center md:text-left">
              <h2 className="font-semibold text-xl">Creative Student Associaton</h2>
              <p className="text-sm mt-1">STMIK Mardira Indonesia</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="https://instagram.com/csa_stmikmi" target="_blank" rel="noopener noreferrer">
              <FaInstagram
                className="dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-700"
                size={20}
              />
            </a>
            <a
              href="https://tiktok.com/@we_csa01?_t=8peEbgVBEof&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok
                className="dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-700"
                size={20}
              />
            </a>
            <a
              href="https://facebook.com/profile.php?id=100078881016780"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-700"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="mailto:csaworks2017@gmail.com"
              className="dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-800"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="flex flex-col justify-center">
          <h3 className="font-normal text-md mb-4">Bergabung bersama kami</h3>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Masukan email anda"
              className="p-3 rounded-md text-gray-800 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-700 text-white py-3 px-6 rounded-md hover:bg-blue-700 w-full md:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="border-t dark:border-gray-700 border-gray-400 mt-8 pt-4 text-center text-sm dark:text-gray-300 text-gray-800">
        <p>
          © 2024 Made with <FaHeart className="inline text-red-500" /> by{" "}
          <span className="text-blue-500 font-semibold">CSA</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

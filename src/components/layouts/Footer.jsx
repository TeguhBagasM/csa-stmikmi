import React, { useRef } from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const ref = useRef(null);

  return (
    <footer ref={ref} className="bg-gray-200 dark:bg-gray-900 py-8">
      <div className="text-center text-gray-900 dark:text-gray-100">
        &copy; {new Date().getFullYear()} Made with <FaHeart className="inline text-red-500" /> by{" "}
        <a
          href="https://instagram.com/csa_stmikmi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-500 hover:underline"
        >
          Creative Student Association
        </a>
      </div>
    </footer>
  );
};

export default Footer;

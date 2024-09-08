import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaHeart, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = ref.current; // Save ref.current to a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the saved variable
      }
    };
  }, []);

  return (
    <footer
      ref={ref}
      className={`bg-blue-950 text-gray-100 py-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <div className="mr-4">
          <h2 className="text-2xl font-bold mb-4">ThievGuide</h2>
          <p className="text-gray-200">
            ThievGuide adalah platform yang membantu Anda menemukan joki terbaik dan kursus terlengkap,
            memudahkan pencarian informasi dan belajar dengan cara yang menyenangkan.
          </p>
        </div>

        <div className="ml-14">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/home" className="text-gray-200 hover:text-blue-300">
                Beranda
              </a>
            </li>
            <li className="mb-2">
              <a href="/tentang-kami" className="text-gray-200 hover:text-blue-300">
                Tentang Kami
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="text-gray-200 hover:text-blue-300">
                Kursus
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/+628986140727"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsappSquare className="text-white" />
            </a>
            <a
              href="https://instagram.com/thievguide"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="mailto:thievguide@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition"
            >
              <MdEmail className="text-red-600" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-blue-500 pt-4 text-center text-gray-100">
        &copy; {new Date().getFullYear()} Made with <FaHeart className="inline text-red-500" /> by
        ThievGuide
      </div>
    </footer>
  );
};

export default Footer;

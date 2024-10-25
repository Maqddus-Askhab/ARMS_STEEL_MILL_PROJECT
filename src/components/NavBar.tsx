"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "../../public/pictures/logo.jpg";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/pages/ProductPage" },
    { name: "Gallery", path: "/pages/Gallery" },
    { name: "About", path: "/pages/about" },
    { name: "Contact", path: "/pages/contact" },
  ];

  return (
    <header className="bg-[#256279] text-white">
      {/* Top Bar */}
      <div className="bg-gray-900 py-5">
        <div className="max-w-7xl mx-auto px-4 flex justify-center lg:justify-between items-center">
          {/* Logo in the center for small screens, left for large screens */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold">STEEL MILL</span>
          </div>

          {/* Email and Phone for large screens, hidden on smaller screens */}
          <div className="hidden lg:flex space-x-6 text-sm items-center">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl" />
              <span>Email: info@steelmill.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-white text-3xl" />
              <span>Phone: +123 456 7890</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <nav className="bg-orange-500 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Left Side (Nav Links) */}
          <ul className="hidden lg:flex space-x-6 font-bold">
            {pages.map((page) => (
              <li
                key={page.name}
                className={`group ${
                  activePage === page.name ? "text-gray-900 " : "text-white"
                }`}
              >
                <Link
                  href={page.path}
                  className="hover:bg-white hover:text-gray-900 p-2 rounded-lg transition"
                  onClick={() => setActivePage(page.name)}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side (Social Media Icons) */}
          <div className="hidden lg:flex space-x-4">
            {[
              { icon: faFacebookF, href: "#" },
              { icon: faTwitter, href: "#" },
              { icon: faInstagram, href: "#" },
              { icon: faLinkedin, href: "#" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-8 h-8 flex justify-center items-center border-2 border-white p-1.5 rounded-full text-white hover:bg-white hover:text-gray-900 transition"
              >
                <FontAwesomeIcon icon={social.icon} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {mobileMenuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-start px-4 py-4 space-y-2">
            {pages.map((page) => (
              <li key={page.name} className="w-full">
                <Link
                  href={page.path}
                  className="block w-full text-left p-2 rounded-lg hover:bg-white hover:text-[#4a6480]"
                  onClick={() => {
                    setActivePage(page.name);
                    setMobileMenuOpen(false); // Close menu after navigation
                  }}
                >
                  {page.name}
                </Link>
              </li>
            ))}

            {/* Social Media Icons (Mobile) */}
            <div className="flex space-x-4 mt-4">
              {[
                { icon: faFacebookF, href: "#" },
                { icon: faTwitter, href: "#" },
                { icon: faInstagram, href: "#" },
                { icon: faLinkedin, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-8 h-8 flex justify-center items-center border-2 border-white p-1.5 rounded-full text-white hover:bg-white hover:text-[#4a6480] transition"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              ))}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

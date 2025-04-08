import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import eteLogo from "../assets/etelogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar bg-[#0B1120] text-white py-4 px-6 flex items-center justify-between fixed w-full z-50 shadow-md">
        <div className="flex items-center">
          <img src={eteLogo} alt="ETE Logo" className="h-12 w-auto" />
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`lg:flex flex-row items-center space-x-8 hidden ml-8`}>
          <li className="hover:text-gray-300 py-2 lg:py-0">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-gray-300 py-2 lg:py-0">
            <Link to="/jobs" onClick={() => setIsMenuOpen(false)}>
              Jobs
            </Link>
          </li>
          <li className="hover:text-gray-300 py-2 lg:py-0">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden lg:block lg:flex-grow text-right lg:mr-6">
          <Link to="/employers" onClick={() => setIsMenuOpen(false)}>
            <button className="px-4 py-2 text-lg hover:text-gray-300">
              Employers
            </button>
          </Link>
        </div>

        <div className="hidden lg:flex space-x-6 items-center">
          <Link to="/register" onClick={() => setIsMenuOpen(false)}>
            <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-gray-800 transition duration-300">
              Sign Up
            </button>
          </Link>

          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            <button className="px-6 py-2 bg-[#FF6B6B] text-white rounded-full hover:bg-red-600 transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } w-full bg-[#0B1120]`}
      >
        <ul className="flex text-white flex-col pt-24  px-4 py-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-gray-300 py-2">Home</li>
          </Link>
          <Link to="/jobs" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-gray-300 py-2">Jobs</li>
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-gray-300 py-2">Contact Us</li>
          </Link>
          <Link to="/employers" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-gray-300 py-2">Employers</li>
          </Link>
          <li className="py-2">
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-gray-800 transition duration-300">
                Sign Up
              </button>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="px-6 py-2 bg-[#FF6B6B] text-white rounded-full hover:bg-red-600 transition duration-300">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeBackground from "../assets/homeBackground.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div>
        <div className="relative flex justify-center items-center min-h-96 h-[90vh] bg-gray-100">
          {/* Background Image */}
          <img
            src={homeBackground}
            alt="Home Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Content */}
          <div className="relative z-10 min-w-full flex justify-center">
            {/* <h1 className="text-6xl font-bold">Welcome to the Home</h1> */}
            <div className="py-6">
              <h2 className="text-7xl font-bold leading-tight">
                Discover Your Next Career Move
              </h2>
              <p className="mt-4 text-lg text-gray-800">
                Explore thousands of opportunities with leading organizations
                worldwide.
              </p>

              <div className="mt-6 flex flex-col items-center mx-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                <input
                  type="text"
                  placeholder="Job Title"
                  className="px-4 py-3 rounded-lg w-full sm:w-1/3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="px-4 py-3 rounded-lg w-full sm:w-1/3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="px-4 py-3 rounded-lg w-full sm:w-1/3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* section  */}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-10 text-center"></div>

      <div className="p-6 px-44 mt-20">
        <h1 className="text-2xl font-semibold flex justify-center">
          Job Listings
        </h1>
        <p className="flex justify-center py-4">
          Explore our latest job opportunities below:
        </p>
        {/* Example Jobs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
          {/* Card 1 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
            <h2 className="font-bold text-xl text-gray-800 mb-2">
              Software Developer
            </h2>
            <div className="text-gray-600 mb-4">
              <p>
                <strong className="font-medium">Location:</strong> Remote
              </p>
              <p>
                <strong className="font-medium">Experience:</strong> 3+ years
              </p>
            </div>
            <Link
              to="/job-details"
              className="text-blue-500 hover:underline font-medium"
              aria-label="View details for Software Developer role"
            >
              View Details &rarr;
            </Link>
          </div>

          {/* Card 2 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              UX/UI Designer
            </h3>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Location:</span> New York
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Experience:</span> 2+ years
            </p>
            <Link
              to="/job-details"
              className="text-blue-500 hover:underline font-medium"
              aria-label="View details for UX/UI Designer role"
            >
              View Details &rarr;
            </Link>
          </div>

          {/* Card 3 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              Data Analyst
            </h3>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Location:</span> San Francisco
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Experience:</span> 1+ years
            </p>
            <Link
              to="/job-details"
              className="text-blue-500 hover:underline font-medium"
              aria-label="View details for Data Analyst role"
            >
              View Details &rarr;
            </Link>
          </div>
        </div>
      </div>

      <Section1 />
      <Section2 />
      <Footer />
    </>
  );
};

export default Home;

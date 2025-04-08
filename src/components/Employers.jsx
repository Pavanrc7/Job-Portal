import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Udemy from "../assets/Udemy.webp";
import Medium from "../assets/Medium.webp";
import Upwork from "../assets/Upwork.webp";
import Figma from "../assets/Figma.webp";
import Astronomer from "../assets/Astronomer.webp";
import Mural from "../assets/Mural.webp";
import Checkrs from "../assets/Checkrs.webp";

const EmployerCard = ({ name, location, jobs, logo }) => {
  return (
    <div className="bg-white p-10 rounded-lg shadow flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Display logo */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <img
            src={logo} // Each logo is passed directly from the props
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm mt-2 text-gray-500">{location}</p>
        </div>
      </div>
      <button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-100">
        Open Jobs: {jobs}
      </button>
    </div>
  );
};

const Employers = () => {
  const [employers] = useState([
    { name: "Udemy", location: "San Francisco", jobs: 1, logo: Udemy },
    { name: "Medium", location: "Los Angeles", jobs: 3, logo: Medium },
    { name: "Upwork", location: "Chicago", jobs: 3, logo: Upwork },
    { name: "Figma", location: "Austin", jobs: 1, logo: Figma },
    { name: "Astronomer", location: "Boston", jobs: 3, logo: Astronomer },
    { name: "Mural", location: "Seattle", jobs: 1, logo: Mural },
    { name: "Checkrs", location: "Denver", jobs: 1, logo: Checkrs },
    { name: "Udemy", location: "San Francisco", jobs: 1, logo: Udemy },
    { name: "Medium", location: "Los Angeles", jobs: 3, logo: Medium },
    { name: "Upwork", location: "Chicago", jobs: 3, logo: Upwork },
  ]);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [radius, setRadius] = useState(50);

  const filteredEmployers = employers.filter(
    (employer) =>
      employer.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      employer.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 mt-20 p-8 rounded-md flex flex-col items-center space-y-2 bg-gray-300">
            <div className="text-2xl font-semibold text-gray-800">
              Employers
            </div>
            <div className="text-sm text-gray-600">Home / Employers</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 p-2 gap-6">
            {/* Sidebar */}
            <div className="col-span-1 md:col-span-3 bg-white p-4 rounded-lg shadow max-h-[600px] overflow-y-auto">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Search by Keywords
              </h2>
              <label htmlFor="search-input" className="sr-only">
                Search for jobs
              </label>
              <input
                id="search-input"
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Company title, keywords..."
                className="w-full p-2 border border-gray-400 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Location
                </h2>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or postcode"
                  className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 mb-2">
                  Radius: {radius} miles
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="w-full accent-blue-600"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Category
                </h2>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Choose a category...
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="apartments">Apartments</option>
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="founded-date"
                  className="text-lg font-semibold text-gray-800 block mb-2"
                >
                  Founded Date
                </label>
                <input
                  type="date"
                  id="founded-date"
                  className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Select the founding date.
                </p>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4">
                Find Employers
              </button>
            </div>

            {/* Employers List */}
            <div className="col-span-1 md:col-span-9">
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">
                  Showing {filteredEmployers.length} of {employers.length}{" "}
                  results
                </p>
                <div className="flex items-center space-x-4">
                  <select className="p-2 border border-gray-300 rounded">
                    <option>Sort by (Default)</option>
                  </select>
                  <select className="p-2 border border-gray-300 rounded">
                    <option>9 Per Page</option>
                  </select>
                </div>
              </div>

              {/* Employer Cards */}
              <div className="grid grid-cols-1 gap-4">
                {filteredEmployers.map((employer, index) => (
                  <EmployerCard
                    key={index}
                    name={employer.name}
                    location={employer.location}
                    jobs={employer.jobs}
                    logo={employer.logo} // Each employer has its own logo passed here
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Employers;

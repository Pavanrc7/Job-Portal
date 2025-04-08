import React from "react";
import logo1 from "../assets/img1.jpg";
import logo2 from "../assets/img2.jpg";
import logo3 from "../assets/img3.jpg";
import logo4 from "../assets/img4.jpg";
import logo5 from "../assets/img5.jpg";
import logo6 from "../assets/img6.jpg";

const Section1 = () => {
  const jobs = [
    {
      title: "Software Engineer (Android)",
      company: "CreativeLayers",
      category: "Design & Creative",
      type: "Full Time",
      location: "London, UK",
      salary: "$450 - $900/month",
      logo: logo1, 
    },
    {
      title: "UI/UX Designer",
      company: "InnovateTech",
      category: "Design & Creative",
      type: "Part Time",
      location: "New York, USA",
      salary: "$300 - $700/month",
      logo: logo2, 
    },
    {
      title: "Data Scientist",
      company: "TechSolutions",
      category: "Data & Analytics",
      type: "Full Time",
      location: "Berlin, Germany",
      salary: "$600 - $1200/month",
      logo: logo3, 
    },
    {
      title: "Frontend Developer",
      company: "CodeCraft",
      category: "Development",
      type: "Contract",
      location: "Toronto, Canada",
      salary: "$400 - $800/month",
      logo: logo4, 
    },
    {
      title: "Marketing Specialist",
      company: "AdVantage",
      category: "Marketing",
      type: "Full Time",
      location: "Paris, France",
      salary: "$500 - $1000/month",
      logo: logo5, 
    },
    {
      title: "Project Manager",
      company: "BuildPro",
      category: "Management",
      type: "Full Time",
      location: "Sydney, Australia",
      salary: "$700 - $1300/month",
      logo: logo6, 
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mt-20">Featured Jobs</h2>
        <p className="py-5">
          Know your worth and find the job that qualifies your life
        </p>
        <div className="grid grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md hover:scale-105 transition"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src={job.logo} 
                  alt="Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-lg text-gray-600 mb-3">
                  by
                  <span className="font-medium text-gray-700">
                    {job.company}
                  </span>
                  in
                  <span className="font-medium text-gray-700">
                    {job.category}
                  </span>
                </p>
                <div className="flex items-center flex-wrap gap-2 mb-3">
                  <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full border border-blue-300 font-medium">
                    {job.type}
                  </span>
                  <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-300 font-medium">
                    {job.location}
                  </span>
                </div>
                <p className="text-sm text-green-700 bg-green-100 px-4 py-1 rounded-full border border-green-300 font-medium shadow-sm">
                  {job.salary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-8 hover:bg-blue-600 transition mb-8">
          Find more
        </button>
      </div>
    </>
  );
};

export default Section1;

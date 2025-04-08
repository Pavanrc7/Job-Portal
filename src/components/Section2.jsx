import React from "react";

const Section2 = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 text-center pb-24">
        <div className="flex flex-wrap gap-8 justify-center py-10 mt-10 mb-12 w-full">
          {/* Employer Section */}
          <div className="flex-1 max-w-sm bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              For Employers
            </h3>
            <p className="text-base text-gray-600 mb-6">
              Sign up to post job openings and discover talented candidates
              looking for their next opportunity.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Register as Employer
            </button>
          </div>
          {/* Candidate Section */}
          <div className="flex-1 max-w-sm bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              For Job Seekers
            </h3>
            <p className="text-base text-gray-600 mb-6">
              Explore exciting job opportunities and take the next step in your
              career.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Register as Job Seeker
            </button>
          </div>
        </div>

        {/* section 2 How it Work */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Connecting talent with opportunity, made simple.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-center">
          {/* Step 1: Register */}
          <div className="flex-1 text-center border-2 p-10 border-gray-300 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 md:flex-col-2 sm:max-w-full bg-white">
            <div className="text-5xl mb-6 text-blue-600">
              <i className="fas fa-pen"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 hover:text-blue-600 hover:underline hover:transition-all duration-300">
              Sign Up
            </h4>
            <p className="text-base text-gray-700">
              Get started by creating your account and joining our network of
              professionals and employers.
            </p>
          </div>

          {/* Step 2: Build Profile */}
          <div className="flex-1 text-center border-2 p-10 border-gray-300 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 md:flex-col-2 sm:max-w-full bg-white">
            <div className="text-5xl mb-6 text-blue-700">
              <i className="fas fa-user"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 hover:text-blue-600 hover:underline hover:transition-all duration-300">
              Create Your Profile
            </h4>
            <p className="text-base text-gray-600">
              Build a compelling professional profile that highlights your
              unique skills and experience.
            </p>
          </div>

          {/* Step 3: Upload Resume */}
          <div className="flex-1 text-center border-2 p-10 border-gray-300 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 md:flex-col-2 sm:max-w-full bg-white">
            <div className="text-5xl mb-6 text-blue-600">
              <i className="fas fa-file-alt"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 hover:text-blue-600 hover:underline hover:transition-all duration-300">
              Upload Your Resume
            </h4>
            <p className="text-base text-gray-700">
              Upload your resume to make your profile stand out and get noticed
              by top employers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

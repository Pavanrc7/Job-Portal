import React, { useState } from "react";
import Navbar from "../components/Navbar";
import JobsForYou from "./JobsForYou";
import RecentSearch from "./RecentSearch";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState("jobs-for-you");

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen w-full pt-20">
        <div className="flex justify-center items-center p-6">
          <form
            className="flex flex-wrap justify-center p-6 bg-white w-4/5 max-w-3xl rounded-lg shadow-lg space-y-4 sm:space-y-0 sm:space-x-4"
            role="search"
          >
            <input
              id="job-title"
              type="text"
              name="jobTitle"
              placeholder="Job title, keywords, or company"
              aria-label="Job title or keywords"
              className="w-full sm:w-auto flex-grow rounded-md p-3 border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
            />
            <input
              id="location"
              type="text"
              name="location"
              placeholder="Enter location"
              aria-label="Location"
              className="w-full sm:w-auto flex-grow rounded-md p-3 border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium rounded-md px-6 py-3 hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center mt-4">
          <h2 className="text-lg text-center">
            <span className="text-blue-600 font-semibold">
              Employers: Post a job
            </span>
            <span> – Your next hire is here.</span>
          </h2>
        </div>

        {/* Tabs Section */}
        <div className="mt-6">
          <div className="flex justify-center gap-14 border-b-2 border-gray-200">
            <button
              onClick={() => setActiveTab("jobs-for-you")}
              className={`pb-2 font-semibold focus:outline-none ${
                activeTab === "jobs-for-you"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-700 hover:text-blue-600 transition"
              }`}
            >
              Jobs for You
            </button>
            <button
              onClick={() => setActiveTab("recent-searches")}
              className={`pb-2 font-semibold focus:outline-none ${
                activeTab === "recent-searches"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-700 hover:text-blue-600 transition"
              }`}
            >
              Recent Searches
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "jobs-for-you" ? <JobsForYou /> : <RecentSearch />}
        </div>
      </div>
    </>
  );
};

export default Jobs;

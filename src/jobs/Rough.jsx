import React, { useState } from "react";

const JobsForYou = () => {
  const jobData = [
    {
      id: 1,
      title: "React Developer",
      company: "TechnoCorp",
      location: "Indiranagar, Bengaluru, Karnataka",
      salary: "Rs. 25,000 - 40,000 per month",
      time: "Full-time",
      schedule: "Monday to Friday",
      label: "Urgently Hiring",
      labelColor: "pink",
      responsibilities: [
        "Build responsive user interfaces using React and Tailwind CSS.",
        "Collaborate with backend developers to integrate APIs.",
      ],
    },
    {
      id: 2,
      title: "WordPress Developer",
      company: "A2A Optima",
      location: "Whitefield, Bengaluru, Karnataka",
      salary: "₹15,000 - ₹25,000 a month",
      time: "Full-time",
      schedule: "Day shift",
      label: "New Opening",
      labelColor: "yellow",
      responsibilities: [
        "Develop and customize WordPress themes and plugins.",
        "Build and maintain WordPress websites according to project specifications.",
      ],
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "NextGen Solutions",
      location: "HSR Layout, Bengaluru, Karnataka",
      salary: "₹35,000 - ₹50,000 per month",
      time: "Full-time",
      schedule: "Flexible hours",
      label: "Remote Available",
      labelColor: "blue",
      responsibilities: [
        "Develop and maintain RESTful APIs using Node.js and Express.",
        "Optimize database queries using PostgreSQL and MongoDB.",
      ],
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "PixelCraft",
      location: "MG Road, Bengaluru, Karnataka",
      salary: "₹20,000 - ₹30,000 per month",
      time: "Full-time",
      schedule: "Monday to Friday",
      label: "Hiring Fast",
      labelColor: "green",
      responsibilities: [
        "Design wireframes, prototypes, and user interfaces.",
        "Collaborate with developers to ensure smooth UI implementation.",
      ],
    },
    {
      id: 5,
      title: "Digital Marketing Executive",
      company: "Growth Hackers",
      location: "JP Nagar, Bengaluru, Karnataka",
      salary: "₹18,000 - ₹28,000 per month",
      time: "Full-time",
      schedule: "Morning Shift",
      label: "Immediate Joiners",
      labelColor: "yellow",
      responsibilities: [
        "Create and execute digital marketing campaigns.",
        "Manage SEO, SEM, and social media ads.",
      ],
    },
    {
      id: 6,
      title: "Full Stack Developer",
      company: "CodeCrafters",
      location: "Koramangala, Bengaluru, Karnataka",
      salary: "₹40,000 - ₹60,000 per month",
      time: "Full-time",
      schedule: "Flexible hours",
      label: "Top Company",
      labelColor: "pink",
      responsibilities: [
        "Develop and maintain front-end (React) and back-end (Node.js).",
        "Deploy applications on AWS and manage cloud services.",
      ],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(jobData[0]);

  const allSkills = ["WordPress", "PHP", "Bootstrap", "React", "Node.js"];
  const [visibleCount, setVisibleCount] = useState(3);
  const toggleSkills = () =>
    setVisibleCount(visibleCount < allSkills.length ? allSkills.length : 3);

  const allEducation = ["Bachelor's degree", "Master's degree", "Diploma"];
  const [visibleEducationCount, setVisibleEducationCount] = useState(1);
  const toggleEducation = () =>
    setVisibleEducationCount(
      visibleEducationCount < allEducation.length ? allEducation.length : 1
    );

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 w-[75%] max-h-full gap-4 p-4">
        {/* Left Side - Job List */}
        <div className="col-span-2 space-y-4 overflow-auto max-h-[900px]">
          {jobData.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="bg-white p-4 border border-gray-300 rounded-2xl shadow-md cursor-pointer hover:shadow-lg"
            >
              <span
                className={`bg-${job.labelColor}-100 text-${job.labelColor}-800 font-medium rounded-md px-3 py-1 inline-block`}
              >
                {job.label}
              </span>
              <h1 className="font-bold text-xl mt-3">{job.title}</h1>
              <p className="text-gray-600 mt-1">{job.company}</p>
              <p className="text-gray-500 mt-1">{job.location}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 text-gray-800 text-sm font-medium rounded-md px-3 py-1">
                  {job.salary}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium rounded-md px-3 py-1">
                  {job.time}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium rounded-md px-3 py-1">
                  {job.schedule}
                </span>
              </div>

              <h2 className="text-sm font-normal mt-4">Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {job.responsibilities.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Side - Job Details */}
        <div className="col-span-2 bg-white border border-gray-300 rounded-lg p-4 shadow">
          <h1 className="text-xl font-bold mb-2">{selectedJob.title}</h1>
          <p className="text-gray-700">{selectedJob.location}</p>
          <p className="text-gray-700 font-medium">{selectedJob.salary}</p>

          <button className="bg-blue-500 rounded-md px-4 py-2 text-white font-semibold hover:bg-blue-600 mt-4">
            Apply Now
          </button>

          <hr className="my-4" />

          {/* Profile Insights */}
          <h2 className="text-lg font-bold">Profile Insights</h2>
          <p className="text-gray-600 text-sm">
            Here’s how the job qualifications align with your profile.
          </p>

          {/* Skills */}
          <h3 className="font-semibold mt-4">Skills</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {allSkills.slice(0, visibleCount).map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <p
            className="text-blue-600 underline cursor-pointer mt-2"
            onClick={toggleSkills}
          >
            {visibleCount < allSkills.length ? "+ Show more" : "- Show less"}
          </p>

          {/* Education */}
          <h3 className="font-semibold mt-6">Education</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {allEducation.slice(0, visibleEducationCount).map((degree) => (
              <span
                key={degree}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {degree}
              </span>
            ))}
          </div>
          <p
            className="text-blue-600 underline cursor-pointer mt-2"
            onClick={toggleEducation}
          >
            {visibleEducationCount < allEducation.length
              ? "+ Show more"
              : "- Show less"}
          </p>

          <hr className="my-4" />

          {/* Location */}
          <h3 className="font-semibold">Location</h3>
          <p className="text-gray-700">{selectedJob.location}</p>

          <hr className="my-4" />

          {/* Job Description */}
          <h3 className="font-semibold">Full Job Description</h3>
          <p className="text-gray-700 mt-2">
            We are hiring {selectedJob.title} to work in our company.
          </p>

          <h4 className="font-semibold mt-4">Responsibilities:</h4>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {selectedJob.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>

          <p className="text-gray-700 mt-4">
            Job Type: {selectedJob.time}, Fresher
          </p>
          <p className="text-gray-700">Pay: {selectedJob.salary}</p>
          <p className="text-gray-700">Schedule: {selectedJob.schedule}</p>
          <p className="text-gray-700">Experience: Required</p>
          <p className="text-gray-700">Work Location: In person</p>
        </div>
      </div>
    </div>
  );
};

export default JobsForYou;

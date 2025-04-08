import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Team", href: "/our-team" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
      { name: "Advertise With Us", href: "/advertise-with-us" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Candidates Zone",
    links: [
      { name: "Browse Jobs", href: "/browse-jobs" },
      { name: "Browse Categories", href: "/browse-categories" },
      { name: "Candidate Dashboard", href: "/candidate-dashboard" },
      { name: "Job Alerts", href: "/job-alerts" },
      { name: "My Account", href: "/my-account" },
      { name: "Your Jobs", href: "/your-jobs" },
    ],
  },
  {
    title: "Employers Zone",
    links: [
      { name: "Browse Candidate", href: "/browse-candidate" },
      { name: "Employer Dashboard", href: "/employer-dashboard" },
      { name: "Add Jobs", href: "/add-jobs" },
      { name: "Job Page", href: "/job-page" },
      { name: "Job Packages", href: "/job-packages" },
      { name: "My Account", href: "/my-account" },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" },
      { name: "Sitemap", href: "/sitemap" },
      { name: "Partnerships", href: "/partnerships" },
      { name: "Accessibility", href: "/accessibility" },
      { name: "Investor Relations", href: "/investor-relations" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto flex flex-wrap justify-between  pb-5">
        {/* Company name and address section */}
        <div className="flex-1 min-w-[200px] mx-5 my-3">
          <h4 className="text-xl font-semibold mb-5">Company Name</h4>
          <p className="text-gray-400">123 Business Street, City, Country</p>
        </div>

        {/* Footer sections */}
        {footerSections.map((section, index) => (
          <div key={index} className="flex-1 min-w-[200px] mx-5 my-3">
            <h4 className="text-lg font-semibold border-b-2 hover:text-[#e1f096] inline-block pb-1 mb-5">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:underline hover:text-[#e1f096] transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 p-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h1 className="text-white mb-4 md:mb-0">
            © All Rights Reserved 2025
          </h1>
          <div className="flex gap-3 md:gap-5 justify-center md:justify-end">
            <div className="p-3 border rounded flex items-center gap-2 text-white cursor-pointer hover:bg-gray-700 transition">
              <FaFacebook size={20} />
            </div>
            <div className="p-3 border rounded flex items-center gap-2 text-white cursor-pointer hover:bg-gray-700 transition">
              <FaInstagram size={20} />
            </div>
            <div className="p-3 border rounded flex items-center gap-2 text-white cursor-pointer hover:bg-gray-700 transition">
              <FaTwitter size={20} />
            </div>
            <div className="p-3 border rounded flex items-center gap-2 text-white cursor-pointer hover:bg-gray-700 transition">
              <FaLinkedin size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

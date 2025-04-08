import React from "react";
import Navbar from "./Navbar";
import lineDark from "../assets/lineDark.png";
import {
  PhoneIcon,
  ChatBubbleLeftIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactUs = () => {
  return (
    <>
      <Navbar />{" "}
      <div
        className="flex flex-col md:flex-row gap-8 items-center justify-center p-6 bg-gray-100 min-h-screen"
        style={{
          backgroundImage: `url(${lineDark})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section */}
        <div className="flex-1 py-10 px-6 rounded-lg shadow-lg text-white max-w-lg">
          <div className="space-y-6">
            <div className="flex items-start">
              <PhoneIcon className="h-12 w-12 text-blue-400 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Talk to Us</h3>
                <p className="text-md leading-relaxed">
                  Toll Free: <strong>1800-102-5557</strong> <br />
                  (9:00 AM - 9:00 PM IST) <br />
                  International: <strong>+91-120-4021100</strong> <br />
                  Bulk Queries: <strong>18001034477</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <ChatBubbleLeftIcon className="h-12 w-12 text-blue-400 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Chat with Us</h3>
                <p className="text-md">Available (10 AM - 7 PM IST, Mon-Sun)</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPinIcon className="h-12 w-12 text-blue-400 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Walk In</h3>
                <p className="text-md mb-2">Visit the nearest branch.</p>
                <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                  Locate Branch
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* left */}
        {/* Right Section */}
        <div className="flex-1 bg-white rounded-lg mt-10 shadow-lg p-4 max-w-md">
          <h2 className="text-lg font-bold mb-3 text-gray-800">
            We'll get in touch with you
          </h2>
          <p className="text-sm text-gray-600 mb-3">* Mandatory Fields</p>
          <form className="space-y-3">
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-gray-700 mb-1"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block font-medium text-gray-700 mb-1"
              >
                Mobile *
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-medium text-gray-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none h-20"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg text-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              >
                Call Me Back
              </button>
            </div>
          </form>
        </div>{" "}
        {/* Right Section */}
      </div>
    </>
  );
};

export default ContactUs;

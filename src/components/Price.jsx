import React from "react";

function Price() {
  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-center items-center border-2 border-dotted border-gray-500 rounded m-6">
        <p className="bg-gray-100 px-4 py-2 text-sm sm:text-base">
          Flat 20% off on all recruitment packages. Hurry! Use coupon code{" "}
          <span className="font-semibold">"WOW20"</span>
        </p>
      </div>

      <div className="border-b-2 flex justify-center items-center mb-8">
        <h1 className="font-bold text-2xl sm:text-3xl text-blue-800 py-2">
          Access Packages
        </h1>
      </div>

      <div className="px-4 sm:px-8 lg:px-16">
        {/* Price List */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-center items-stretch gap-8 mt-8">
          {/* Plan 1 */}
          <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
            <div className="rounded-xl overflow-hidden border border-gray-300 shadow-lg">
              <div className="text-white bg-gradient-to-r from-blue-400 to-blue-600 p-6">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold pb-2">
                    Jump Starter
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold pb-2">
                    ₹2,999/-
                  </p>
                </div>
                <p className="flex justify-end text-sm sm:text-base">
                  30 Days Validity
                </p>
              </div>
              <div className="p-6">
                <ul className="list-disc list-inside text-sm sm:text-base space-y-2 text-gray-700">
                  <li>300 Resume / CV Access</li>
                  <li>300 Emails / Call Letters</li>
                  <li>Track Mail and Call Letter Responses</li>
                  <li>Sub-Location Based Search</li>
                </ul>
                <div className="flex justify-center mt-6">
                  <button className="text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200">
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
            <div className="rounded-xl overflow-hidden border border-gray-300 shadow-lg">
              <div className="text-white bg-gradient-to-r from-green-400 to-green-600 p-6">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold pb-2">
                    Pro Starter
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold pb-2">
                    ₹4,999/-
                  </p>
                </div>
                <p className="flex justify-end text-sm sm:text-base">
                  60 Days Validity
                </p>
              </div>
              <div className="p-6">
                <ul className="list-disc list-inside text-sm sm:text-base space-y-2 text-gray-700">
                  <li>1200 Resume / CV Access</li>
                  <li>1200 Emails / Call Letters</li>
                  <li>Priority Support</li>
                  <li>Location & Skill-Based Search</li>
                </ul>
                <div className="flex justify-center mt-6">
                  <button className="text-white bg-green-500 rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200">
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="w-full sm:w-2/3 lg:w-1/3 p-4">
            <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-xl">
              <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6">
                <div className="text-center space-y-2">
                  <p className="text-xl font-semibold sm:text-2xl">
                    Elite Starter
                  </p>
                  <p className="text-3xl font-bold sm:text-4xl">₹9,999/-</p>
                </div>
                <p className="text-right text-sm sm:text-base mt-4">
                  90 Days Validity
                </p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="list-disc list-inside text-sm sm:text-base space-y-2 text-gray-700">
                  <li>Unlimited Resume / CV Access</li>
                  <li>Unlimited Emails / Call Letters</li>
                  <li>Dedicated Account Manager</li>
                  <li>Advanced Candidate Insights</li>
                </ul>
                <div className="flex justify-center">
                  <button className="px-5 py-2 rounded-lg text-white bg-purple-500 hover:bg-purple-600 active:scale-95 transition duration-200">
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* details  */}
      <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-md shadow-md">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center mb-6">
          <span className="w-full sm:w-auto">
            *For customised bulk requirements, please fill form and submite.
          </span>
        </div>

        <form className="p-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Requirement Type"
              className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

      

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Price;

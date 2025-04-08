import React from "react";

const RecentSearch = () => {
  return (
    <div className="h-screen overflow-auto flex justify-center text-center space-x-4">
      <div>
        <h1 className="font-semibold mb-2">No recent searches yet</h1>
        <p className="text-gray-700">
          After you run a search, your recent 
        </p>
        <p className="text-gray-700">searches will live here.</p>
        <button link href="/" className="mt-2 px-4 py-2 font-semibold border border-blue-500 text-blue-500 rounded hover:bg-blue-100">
          Start a search
        </button>
      </div>
    </div>
  );
};

export default RecentSearch;

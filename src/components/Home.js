import React from "react";

export default function Home() {
  return (
    // Editor simulation
    <div className="home--container md:py-6 md:px-12 py-4 px-8 font-mono">
      <div className="md:text-4xl text-2xl font-bold text-red-400">
        You have no permission to access this page
      </div>
      <div className="m-2 text-gray-400">Exit with code: 401</div>
      <div className="text-gray-800 mt-4">
        <span className="bg-gray-200">
          <span className="bg-white px-1">1</span> console.log(
          <span className="text-green-700">
            "You have no permission to access this page"
          </span>
          )
        </span>
      </div>
    </div>
  );
}

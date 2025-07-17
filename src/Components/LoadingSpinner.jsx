import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black dark:bg-black transition-colors duration-300">
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="animate-spin h-16 w-16 text-purple-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Loading portfolio...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

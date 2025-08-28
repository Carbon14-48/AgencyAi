import React from "react";

export default function ServiceCard({ service, index }) {
  return (
    <div className="group relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex items-center gap-4 p-8 bg-white dark:bg-gray-900 transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:scale-110">
          <img
            src={service.icon}
            alt={`${service.title} icon`}
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {service.title}
          </h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
            {service.description}
          </p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

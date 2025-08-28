import React from "react";
import assets from "../../assets/assets";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6
  py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden
  text-gray-700 dark:text-gray-300"
    >
      <div className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 p-1.5 pr-4 rounded-full bg-white dark:bg-black">
        <img
          className="w-20"
          src={assets.group_profile}
          alt="profile picture"
        />
        <p className="text-xl font-medium text-black dark:text-white">
          Trusted By 100k+ people
        </p>
      </div>
    </div>
  );
}

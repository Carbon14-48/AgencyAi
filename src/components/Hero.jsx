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
      <h1
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium 
      xl:leading-[95px] max-w-5xl"
      >
        Turning Imagination into{" "}
        <span
          className="bg-gradient-to-r from-[#5055e5] to-[#4d8cea]
        bg-clip-text text-transparent"
        >
          Digital{" "}
        </span>
        Impact.
      </h1>
      <p
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75
      max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>
      <div className="relative">
        <img
          src={assets.hero_img}
          alt="hero image Of the two girls sitting looking into a Laptop"
          className="w-full max-w-6xl"
        />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
        />
      </div>
    </div>
  );
}

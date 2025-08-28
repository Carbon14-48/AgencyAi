import React from "react";
import assets from "../../assets/assets";
export default function Footer({ theme }) {
  return (
    <div
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4
    sm:px-10 lg:px-24 xl:px-40"
    >
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
          />
          <p>
            From Strategy to execution, we craft digital solutions that move
            your business forward.
          </p>
          <ul className="flex gap-8 pb-4">
            <li>
              <a href="#hero" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              {" "}
              <a href="#our-work" className="hover:text-primary">
                Our Work
              </a>
            </li>
            <li>
              {" "}
              <a href="#contact-us" className="hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-gray-600 dark:text-gray-400">
            <h3 className="font-semibold">Subscribe to our NewsLetter</h3>
            <p className="text-sm mt-2 mb-6">
              The latest news, articles,and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex gap-2 text-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full
              p-3 text-sm outline-none rounded dark:taxt-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
              />
              <button className="bg-primary text-white rounded-full py-2 px-6 hover:scale-103 transition-all ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />
      <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2025 © agency.io - Carbon14</p>
        <div className="flex gap-4 justify-between items-center">
          <img src={assets.facebook_icon} alt="Facebook icon" />
          <img src={assets.twitter_icon} alt="Twitter icon" />
          <img src={assets.instagram_icon} alt="Instagram icon" />
          <img src={assets.facebook_icon} alt="Facebook icon" />
        </div>
      </div>
    </div>
  );
}

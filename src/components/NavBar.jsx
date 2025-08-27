import React, { useState } from "react";
import assets from "../../assets/assets";

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <picture className="w-32 sm:w-40">
        <source
          media="(prefers-color-scheme: dark)"
          srcSet={assets.logo_dark}
        />
        <img src={assets.logo} alt="Agency Ai Logo" className="w-32 sm:w-40" />
      </picture>

      <div
        className={`text-gray-700 dark:text-white sm:text-xl ${
          !sidebarOpen
            ? `max-sm:w-0 overflow-hidden`
            : `max-sm:w-60 max-sm:pl-1`
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-1/2 max-sm:flex-col max-sm:bg-primary max-sm:text-xl max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="close icon"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />
        <a href="#" className="sm:hover:border-b max-sm:ml-4">
          Home
        </a>
        <a href="#services" className="sm:hover:border-b max-sm:ml-4">
          Services
        </a>
        <a href="#our-work" className="sm:hover:border-b max-sm:ml-4">
          Our Work
        </a>
        <a href="#contact-us" className="sm:hover:border-b max-sm:ml-4">
          Contact Us
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all text-sm"
        >
          <span>Connect</span>
          <img src={assets.arrow_icon} width={14} alt="Contact Us Button" />
        </a>
        <picture className="w-8 sm:hidden cursor-pointer">
          <source
            media="(prefers-color-scheme: dark)"
            srcSet={assets.menu_icon_dark}
          />
          <img
            src={assets.menu_icon}
            alt="menu icon"
            onClick={() => setSidebarOpen(true)}
            className="w-8 cursor-pointer"
          />
        </picture>
      </div>
    </div>
  );
}

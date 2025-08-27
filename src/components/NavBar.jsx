import React, { useState } from "react";
import assets from "../../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function NavBar({ theme, setTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium transition-colors duration-200 ${
        theme === "dark"
          ? "bg-gray-900/70 text-white"
          : "bg-white/50 text-gray-700"
      }`}
    >
      <picture className="w-32 sm:w-40">
        {theme === "dark" ? (
          <img
            src={assets.logo_dark}
            alt="Agency Ai Logo"
            className="w-32 sm:w-40"
          />
        ) : (
          <img
            src={assets.logo}
            alt="Agency Ai Logo"
            className="w-32 sm:w-40"
          />
        )}
      </picture>

      <div
        className={`sm:text-xl ${
          !sidebarOpen
            ? `max-sm:w-0 overflow-hidden`
            : `max-sm:w-56 max-sm:pl-1`
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-1/2 max-sm:flex-col max-sm:bg-primary max-sm:text-xl max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all duration-300 ${
          theme === "dark" ? "text-white" : "text-gray-700"
        }`}
      >
        <img
          src={assets.close_icon}
          alt="close icon"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />
        <a
          href="#"
          className="sm:hover:border-b max-sm:ml-4 transition-all duration-200"
        >
          Home
        </a>
        <a
          href="#services"
          className="sm:hover:border-b max-sm:ml-4 transition-all duration-200"
        >
          Services
        </a>
        <a
          href="#our-work"
          className="sm:hover:border-b max-sm:ml-4 transition-all duration-200"
        >
          Our Work
        </a>
        <a
          href="#contact-us"
          className="sm:hover:border-b max-sm:ml-4 transition-all duration-200"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 text-sm"
        >
          <span>Connect</span>
          <img src={assets.arrow_icon} width={14} alt="Contact Us Button" />
        </a>
        <picture className="w-8 sm:hidden cursor-pointer">
          {theme === "dark" ? (
            <img
              src={assets.menu_icon_dark}
              alt="menu icon"
              onClick={() => setSidebarOpen(true)}
              className="w-8 cursor-pointer"
            />
          ) : (
            <img
              src={assets.menu_icon}
              alt="menu icon"
              onClick={() => setSidebarOpen(true)}
              className="w-8 cursor-pointer"
            />
          )}
        </picture>
      </div>
    </div>
  );
}

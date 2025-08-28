import React from "react";
import assets from "../../assets/assets";

export default function ThemeToggleBtn({ theme, setTheme }) {
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border transition-all duration-200 hover:scale-105 ${
        theme === "dark"
          ? "border-gray-600 hover:bg-gray-800 bg-gray-900"
          : "border-gray-300 hover:bg-gray-100 bg-white"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <img
          src={assets.sun_icon}
          className="w-6 h-6"
          alt="Switch to light mode"
        />
      ) : (
        <img
          src={assets.moon_icon}
          className="w-6 h-6"
          alt="Switch to dark mode"
        />
      )}
    </button>
  );
}

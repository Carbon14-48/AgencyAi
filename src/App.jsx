import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to light
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // Apply theme changes to document
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.colorScheme = "dark";
      root.classList.add("dark");
    } else {
      root.style.colorScheme = "light";
      root.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;

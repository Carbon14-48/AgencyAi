import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-black relative">
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;

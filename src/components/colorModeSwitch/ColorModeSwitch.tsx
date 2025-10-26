import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./ColorModeSwitch.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <div className="theme-toggle" onClick={handleToggle}>
      <FontAwesomeIcon
        icon={darkMode ? faMoon : faSun}
        className={`toggle-icon ${darkMode ? "moon" : "sun"}`}
      />
    </div>
  );
};

export default ThemeToggle;

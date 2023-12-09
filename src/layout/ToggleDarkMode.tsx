import React from "react";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in local storage
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to the HTML element
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Save dark mode state to local storage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2">
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;

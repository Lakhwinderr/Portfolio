import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="themeToggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <span className="themeToggleIcon" aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>
      <span className="themeToggleLabel">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

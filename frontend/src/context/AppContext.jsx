import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    return isDark;
  });

  const value = {
    darkMode,
    setDarkMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

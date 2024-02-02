import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  const [isLightTheme, changeTheme] = useState(true);

  const handleThemeToggle = () => {
    changeTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    fetch("http://localhost:3001/apphub/apks")
      .then((response) => response.json())
      .then((data) => setApps(data))
      .catch((error) => console.error("Error fetching app data:", error));
  }, []);

  const contextValue = {
    apps,
    // setApps,
    isLightTheme,
    handleThemeToggle,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  // console.log(useContext(AppContext));
  return useContext(AppContext);
};

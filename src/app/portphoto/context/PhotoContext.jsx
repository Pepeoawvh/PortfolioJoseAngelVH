"use client";
import { createContext, useContext, useState } from "react";

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);
  return (
    <PhotoContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);

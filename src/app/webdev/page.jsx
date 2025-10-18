"use client";
import React, { useState } from "react";
import NavbarWeb from "./components/NavbarWeb";
import FooterWeb from "./components/FooterWeb";
import EmailSection from "./components/EmailSection";
import AboutSection from "./components/AboutWeb";
import ProjectsSection from "./components/WebProjectsSection";

const WebDev = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "contacto":
        return <EmailSection />;
      case "projects":
        return <ProjectsSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1914] text-gray-200 flex flex-col">
      <NavbarWeb
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {/*espaciador con la altura exacta del navbar */}
      <div className="h-20"></div>
      <main className="flex-grow">
        {renderSection()}
      </main>
      <FooterWeb />
    </div>
  );
};
export default WebDev;
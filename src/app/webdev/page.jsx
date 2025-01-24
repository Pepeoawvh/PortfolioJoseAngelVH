"use client";
import React, { useState } from "react";
import NavbarWeb from "../components/NavbarWeb";
import FooterWeb from "../components/FooterWeb";
import EmailSection from "../components/EmailSection";
import AboutSection from "../components/AboutWeb";
import ProjectsSection from "../components/WebProjectsSection";

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
    <div className="grid auto-rows-min h-full">
      <NavbarWeb
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {renderSection()}
      <FooterWeb />
    </div>
  );
};

export default WebDev;

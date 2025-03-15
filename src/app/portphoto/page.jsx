"use client";
import React, { useState } from "react";
import CarruselCircular from "./components/CarruselCircular";
import Fotolibros from "./components/Fotolibros";
import ProyectosPh from "./components/ProyectosPh";
import EducPh from "./components/EducPh";
import { sourceSansPro } from "../ui/fonts";

const PortPhoto = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={`flex flex-col min-h-screen`}>
      <header className="text-center  mt-20 bg-gray-800 text-white">
      </header>

      <main className="flex-grow">


        <section className="relative bg-gray-800 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 px-4 md:px-12 py-4 text-[#FFB300]">
          <button
            className="border-2 border-[#FFB300] h-10 w-1/2 rounded transition-all duration-300 text-shadow-md hover:w-4/5 hover:text-xl"
            onClick={() => toggleSection("fotolibros")}
          >
            <span>Fotolibros</span>
          </button>
          <button
            className="border-2 border-[#FFB300] h-10 w-1/2 rounded transition-all duration-300 text-shadow-md hover:w-4/5 hover:text-xl"
            onClick={() => toggleSection("proyectos")}
          >
            <span>Proyectos</span>
          </button>
          <button
            className="border-2 border-[#FFB300] h-10 w-1/2 rounded transition-all duration-300 text-shadow-md hover:w-4/5 hover:text-xl"
            onClick={() => toggleSection("materialEducativo")}
          >
            <span>Material Educativo</span>
          </button>
        </section>

        <div className="overflow-hidden transition-all duration-500">
          {activeSection === "fotolibros" && <Fotolibros />}
          {activeSection === "proyectos" && <ProyectosPh />}
          {activeSection === "materialEducativo" && <EducPh />}
        </div>
        <div className="flex justify-center py-4">
          <CarruselCircular />
        </div>
      </main>
    </div>
  );
};

export default PortPhoto;
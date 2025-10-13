"use client";
import React, { useState } from "react";
import CarruselCircular from "./components/CarruselCircular";
import Fotolibros from "./components/Fotolibros";
import ProyectosPh from "./components/ProyectosPh";
import EducPh from "./components/EducPh";
import { sourceSansPro } from "../ui/fonts";
import { CameraIcon } from "@heroicons/react/24/outline";

const PortPhoto = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={`flex select-none flex-col min-h-screen bg-[#0a0a0a] ${sourceSansPro.className}`}>
      <main className="flex-grow pt-24 pb-12"> 
        {/* Sección de navegación - eliminado sticky */}
        <section className="bg-black border-y border-white/5 py-4 shadow-md mb-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
              {/* Botón Fotolibros */}
              <button
                className={`group relative overflow-hidden rounded-md transition-all duration-300
                  ${activeSection === "fotolibros" 
                    ? "bg-[#FFB300]/20 border shadow-md shadow-[#FFB300]/20 border-[#FFB300]/80" 
                    : "bg-black/40 border border-[#FFB300]/20 hover:border-[#FFB300]/40"}`}
                onClick={() => toggleSection("fotolibros")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300]/0 via-[#FFB300]/5 to-[#FFB300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="px-6 py-3 flex items-center justify-center gap-2">
                  <span className="text-base md:text-lg font-medium text-white group-hover:text-[#FFB300] transition-colors duration-300">
                    Fotolibros
                  </span>
                </div>
                <div className={`h-0.5 w-0 bg-[#FFB300] transition-all duration-500 ${activeSection === "fotolibros" ? "w-full" : "group-hover:w-full"}`}></div>
              </button>
              
              {/* Botón Proyectos */}
              <button 
                className={`group relative overflow-hidden rounded-md transition-all duration-300
                  ${activeSection === "proyectos" 
                    ? "bg-[#FFB300]/20 border border-[#FFB300]/80 shadow-md shadow-[#FFB300]/20" 
                    : "bg-black/40 border border-[#FFB300]/20 hover:border-[#FFB300]/40"}`}
                onClick={() => toggleSection("proyectos")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300]/0 via-[#FFB300]/5 to-[#FFB300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="px-6 py-3 flex items-center justify-center gap-2">
                  <span className="text-base md:text-lg font-medium text-white group-hover:text-[#FFB300] transition-colors duration-300">
                    Proyectos
                  </span>
                </div>
                <div className={`h-0.5 w-0 bg-[#FFB300] transition-all duration-500 ${activeSection === "proyectos" ? "w-full" : "group-hover:w-full"}`}></div>
              </button>
              
              {/* Botón Material Educativo */}
              <button
                className={`group relative overflow-hidden rounded-md transition-all duration-300
                  ${activeSection === "materialEducativo" 
                    ? "bg-[#FFB300]/20 border border-[#FFB300]/80 shadow-md shadow-[#FFB300]/20" 
                    : "bg-black/40 border border-[#FFB300]/20 hover:border-[#FFB300]/40"}`}
                onClick={() => toggleSection("materialEducativo")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300]/0 via-[#FFB300]/5 to-[#FFB300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="px-6 py-3 flex items-center justify-center gap-2">
                  <span className="text-base md:text-lg font-medium text-white group-hover:text-[#FFB300] transition-colors duration-300">
                    Material Educativo
                  </span>
                </div>
                <div className={`h-0.5 w-0 bg-[#FFB300] transition-all duration-500 ${activeSection === "materialEducativo" ? "w-full" : "group-hover:w-full"}`}></div>
              </button>
            </div>
          </div>
        </section>

        {/* Contenido de la sección activa */}
        {activeSection && (
          <div className="transition-all duration-500 ease-in-out overflow-hidden px-4 mb-16">
            {activeSection === "fotolibros" && <Fotolibros />}
            {activeSection === "proyectos" && <ProyectosPh />}
            {activeSection === "materialEducativo" && <EducPh />}
          </div>
        )}

        {/* Contenedor del carrusel con buen espacio */}
        <div className="px-4 ">
          <div className="max-w-6xl mx-auto">
            {/* Título para el carrusel */}
            
            <CarruselCircular />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortPhoto;
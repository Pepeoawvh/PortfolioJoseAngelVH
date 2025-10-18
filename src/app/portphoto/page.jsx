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

  const Btn = ({ id, children }) => {
    const active = activeSection === id;
    return (
      <button
        type="button"
        role="tab"
        aria-selected={active}
        aria-controls={`panel-${id}`}
        className={`group relative overflow-hidden rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB300]/40
          ${active
            ? "bg-[#FFB300]/15 border border-[#FFB300]/70 shadow-[0_0_30px_-12px_rgba(255,179,0,0.35)]"
            : "bg-black/40 border border-[#FFB300]/20 hover:border-[#FFB300]/40"}`}
        onClick={() => toggleSection(id)}
      >
        {/* brillo transversal sutil */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFB300]/0 via-[#FFB300]/10 to-[#FFB300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="px-6 py-3 flex items-center justify-center gap-2">
          <span className={`text-base md:text-lg font-medium transition-colors duration-200
            ${active ? "text-[#FFB300]" : "text-white group-hover:text-[#FFB300]"}`}>
            {children}
          </span>
        </div>
        <div className={`h-0.5 w-0 bg-[#FFB300] transition-all duration-300 ${active ? "w-full" : "group-hover:w-full"}`} />
      </button>
    );
  };

  return (
    <div className={`flex select-none flex-col min-h-screen bg-[#0a0a0a] ${sourceSansPro.className}`}>
      <main className="flex-grow pt-24 pb-12">
        {/* Navegación */}
        <section className="bg-black border-y border-white/5 py-4 shadow-md mb-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4" role="tablist" aria-label="Secciones de fotografía">
              <Btn id="fotolibros">Fotolibros</Btn>
              <Btn id="proyectos">Proyectos</Btn>
              <Btn id="materialEducativo">Material Educativo</Btn>
            </div>
          </div>
        </section>

        {/* Panel activo con crossfade y slide leve */}
        <div
          id={`panel-${activeSection || "none"}`}
          role="tabpanel"
          aria-live="polite"
          className={`px-4 mb-16 transition-all duration-300 ease-out
            ${activeSection ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
        >
          {activeSection === "fotolibros" && <Fotolibros />}
          {activeSection === "proyectos" && <ProyectosPh />}
          {activeSection === "materialEducativo" && <EducPh />}
        </div>

        {/* Carrusel con fade-in al cargar */}
        <div className="px-4">
          <div className="max-w-6xl mx-auto animate-fade animate-once animate-duration-300">
            <CarruselCircular />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortPhoto;

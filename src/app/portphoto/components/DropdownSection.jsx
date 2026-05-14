"use client";
import { useRef } from "react";
import { usePhoto } from "../context/PhotoContext";
import Fotolibros from "./Fotolibros";
import ProyectosPh from "./ProyectosPh";
import EducPh from "./EducPh";

export default function DropdownSection() {
  const { activeSection } = usePhoto();
  const panelRef = useRef(null);

  return (
    <div
      ref={panelRef}
      data-dropdown-panel
      className={`fixed top-[80px] left-0 w-full z-40 transition-all duration-300 ease-out
        ${activeSection ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        max-h-[calc(100vh-80px)] overflow-y-auto
        scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
        scrollbar-thumb-[#FFB300]/40 scrollbar-track-[#111]`}
    >
      <div className="bg-black/70 backdrop-blur-sm border-t border-gray-700 shadow-lg">
        <div className="w-full px-4 py-8 sm:px-6 md:max-w-6xl md:mx-auto">
          {activeSection === "fotolibros" && <Fotolibros />}
          {activeSection === "proyectos" && <ProyectosPh />}
          {activeSection === "experienciasEducativas" && (
            <div className="w-full space-y-6">
              <EducPh />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

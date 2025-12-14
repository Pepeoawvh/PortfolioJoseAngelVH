"use client";
import { useRef } from "react";
import NavbarPhoto from "./components/NavbarPhoto";
import FooterPhoto from "./components/FooterPhoto";
import { PhotoProvider, usePhoto } from "./context/PhotoContext";
import Fotolibros from "./components/Fotolibros";
import ProyectosPh from "./components/ProyectosPh";
import EducPh from "./components/EducPh";

function DropdownSection() {
  const { activeSection } = usePhoto();
  const panelRef = useRef(null);

  return (
    <>
      {/* Fondo invisible solo visual */}
      {activeSection && (
        <div 
          className="fixed inset-0 z-30 pointer-events-none" 
          aria-hidden="true"
        />
      )}

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
            {/* ✅ CORRECCIÓN: Responsive padding + width */}
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
    </>
  );
}

export default function PortPhotoLayout({ children }) {
  return (
    <PhotoProvider>
      <div className="relative h-full bg-[#0a0a0a] text-gray-50 overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full z-50">
          <NavbarPhoto />
        </div>

        <DropdownSection />

        <main className="relative z-0 pt-[80px] ">{children}</main>

        <FooterPhoto />
      </div>
    </PhotoProvider>
  );
}

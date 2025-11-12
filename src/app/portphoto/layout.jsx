  "use client";
  import { useEffect, useRef } from "react";
  import NavbarPhoto from "./components/NavbarPhoto";
  import FooterPhoto from "./components/FooterPhoto";
  import { PhotoProvider, usePhoto } from "./context/PhotoContext";
  import Fotolibros from "./components/Fotolibros";
  import ProyectosPh from "./components/ProyectosPh";
  import EducPh from "./components/EducPh";

  function DropdownSection() {
    const { activeSection, setActiveSection } = usePhoto();
    const panelRef = useRef(null);

    // 🔸 Cerrar al hacer clic fuera del panel
    useEffect(() => {
      function handleClickOutside(event) {
        if (panelRef.current && !panelRef.current.contains(event.target)) {
          setActiveSection(null);
        }
      }

      if (activeSection) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeSection, setActiveSection]);

    return (
      <>
        {/* Fondo invisible para capturar clics fuera del panel */}
        {activeSection && (
          <div className="fixed inset-0 z-30" aria-hidden="true"></div>
        )}

        <div
          ref={panelRef}
          className={`fixed top-[64px] left-0 w-full z-40 transition-all duration-300 ease-out
            ${activeSection ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          <div className="bg-[#111] border-t border-gray-700 shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-8">
              {activeSection === "fotolibros" && <Fotolibros />}
              {activeSection === "proyectos" && <ProyectosPh />}
              {activeSection === "materialEducativo" && <EducPh />}
            </div>
          </div>
        </div>
      </>
    );
  }

  export default function PortPhotoLayout({ children }) {
    return (
      <PhotoProvider>
        <div className="relative min-h-screen bg-[#191923] text-gray-50 overflow-x-hidden">
          {/* Navbar siempre fijo */}
          <div className="fixed top-0 left-0 w-full z-50">
            <NavbarPhoto />
          </div>

          {/* Panel flotante */}
          <DropdownSection />

          {/* Contenido principal, debajo del navbar */}
          <main className="relative z-0 pt-[80px]">{children}</main>

          <FooterPhoto />
        </div>
      </PhotoProvider>
    );
  }

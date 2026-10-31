"use client";
import React, { useState } from "react";

const DesktopSectionsPhoto = ({ secciones }) => {
  const [seccionActiva, setSeccionActiva] = useState(Object.keys(secciones)[0]);

  return (
    <>
      {/* Navegación de secciones */}
      <section className="bg-black/95 select-none border-y border-white/10 px-4 md:px-12 py-3 sticky top-20 z-10 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 max-w-5xl mx-auto">
          {Object.keys(secciones).map((seccion) => {
            const active = seccionActiva === seccion;
            return (
              <button
                key={seccion}
                type="button"
                className={`relative group overflow-hidden transition-all duration-200 px-4 py-2.5 w-full text-left border-b
                  ${active
                    ? "bg-[#FFB300]/5 border-[#FFB300]/70 text-white"
                    : "bg-transparent border-transparent text-gray-400 hover:border-[#FFB300]/40 hover:text-gray-200"
                  }`}
                onClick={() => setSeccionActiva(seccion)}
              >
                <span className={`relative z-10 text-sm tracking-wide transition-colors duration-200 ${active ? "text-[#FFB300]" : ""}`}>
                  {secciones[seccion].titulo}
                </span>
                <div className={`absolute bottom-0 left-0 h-px bg-[#FFB300] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>
            );
          })}
        </div>
      </section>

      {/* Contenido activo */}
      <section className="px-4 md:px-12 py-12 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          {/* Header de sección */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">
              {secciones[seccionActiva].titulo}
            </h2>
            <div className="h-px w-20 bg-gradient-to-r from-[#FFB300] to-transparent mb-3" />
            <p className="text-[#FFB300]/80 text-sm font-light tracking-widest uppercase">
              {secciones[seccionActiva].subtitulo}
            </p>
          </div>

          {/* Contenido con re-animación al cambiar sección */}
          <div key={seccionActiva} className="animate-fade animate-duration-300">
            {secciones[seccionActiva].contenido}
          </div>
        </div>
      </section>
    </>
  );
};

export default DesktopSectionsPhoto;

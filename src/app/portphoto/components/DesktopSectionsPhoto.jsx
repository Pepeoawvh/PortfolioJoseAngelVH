"use client";
import React from "react";

const DesktopSectionsPhoto = ({ secciones, seccionActiva, setSeccionActiva }) => (
  <>
    {/* Navegación de secciones */}
    <section className="bg-black select-none border-y border-white/10 shadow-md px-4 md:px-12 py-4 sticky top-20 z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center max-w-6xl mx-auto animate-fade animate-duration-300">
        {Object.keys(secciones).map((seccion) => {
          const active = seccionActiva === seccion;
          return (
            <button
              key={seccion}
              type="button"
              className={`relative group overflow-hidden transition-colors duration-200 px-3 py-2 w-full rounded
                ${active
                  ? "bg-[#FFB300]/20 border border-[#FFB300]/80 text-white shadow-[0_0_30px_-12px_rgba(255,179,0,0.25)]"
                  : "bg-black/40 border border-white/10 text-gray-300 hover:border-[#FFB300]/40"}`}
              onClick={() => setSeccionActiva(seccion)}
            >
              {/* brillo transversal sutil */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFB300]/0 via-[#FFB300]/10 to-[#FFB300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* texto */}
              <span className={`relative z-10 text-sm tracking-wide transition-colors duration-200
                ${active ? "text-white" : "group-hover:text-[#FFB300]"}`}>
                {secciones[seccion].titulo}
              </span>
              {/* subrayado */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#FFB300] transition-all duration-300
                ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
            </button>
          );
        })}
      </div>
    </section>

    {/* Contenido activo con crossfade + slide-up leve */}
    <section className="px-4 md:px-12 py-8 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto p-6 bg-black/20 border border-white/5 rounded-md shadow-lg
                      animate-fade-up animate-once animate-duration-300 animate-ease-out">
        <div className="mb-6">
          <h2 className="text-2xl font-medium text-white mb-2">{secciones[seccionActiva].titulo}</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#FFB300] to-transparent mb-3" />
          <h3 className="text-lg text-[#FFB300] font-light tracking-wide">{secciones[seccionActiva].subtitulo}</h3>
        </div>

        <div
          key={seccionActiva}
          className="prose max-w-none text-gray-300 animate-fade animate-duration-200"
        >
          {secciones[seccionActiva].contenido}
        </div>
      </div>
    </section>
  </>
);

export default DesktopSectionsPhoto;

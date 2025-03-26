import React from "react";

const DesktopSectionsPhoto = ({ secciones, seccionActiva, setSeccionActiva }) => (
  <>
    {/* Navegación de secciones - Estilo monocromático */}
    <section className="bg-black select-none border-y border-white/10  shadow-md px-4 md:px-12 py-4 sticky top-20 z-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-items-center max-w-6xl mx-auto">
        {Object.keys(secciones).map((seccion) => (
          <button
            key={seccion}
            className={`relative group overflow-hidden transition-all duration-300 px-3 py-2 w-full rounded ${
              seccionActiva === seccion 
              ? "bg-[#FFB300]/20 border shadow-white/20 border-[#FFB300]/80 text-white" 
              : "bg-black/40 border border-white/10 shadow-white/20 text-gray-300 hover:border-[#FFB300]/40"
            }`}
            onClick={() => setSeccionActiva(seccion)}
          >
            {/* Gradiente de hover */}
            <div className="absolute inset-0 shadow-white/20 bg-gradient-to-r from-[#FFB300]/0 via-[#FFB300]/5 to-[#FFB300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Texto del botón */}
            <span className="relative z-10 text-sm tracking-wide group-hover:text-[#FFB300] transition-colors duration-300">
              {secciones[seccion].titulo}
            </span>
            
            {/* Línea inferior animada */}
            <div className={`absolute bottom-0 left-0 h-0.5 bg-[#FFB300] transition-all duration-500 ${
              seccionActiva === seccion ? "w-full" : "w-0 group-hover:w-full"
            }`}></div>
          </button>
        ))}
      </div>
    </section>

    {/* Contenido de la sección activa */}
    <section className="px-4 md:px-12 py-8 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto p-6 bg-black/20 border border-white/5 rounded-md shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-medium text-white mb-2">{secciones[seccionActiva].titulo}</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#FFB300] to-transparent mb-3"></div>
          <h3 className="text-lg text-[#FFB300] font-light tracking-wide">{secciones[seccionActiva].subtitulo}</h3>
        </div>
        
        <div className="prose max-w-none text-gray-300">
          {secciones[seccionActiva].contenido}
        </div>
      </div>
    </section>
  </>
);

export default DesktopSectionsPhoto;
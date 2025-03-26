import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MobileSectionsPhoto = ({ secciones, seccionesAbiertas, toggleSeccion }) => (
  <div className="space-y-3 select-none">
    {Object.keys(secciones).map((seccion) => (
      <div 
        key={seccion} 
        className={`border rounded-md overflow-hidden shadow-md transition-all duration-300 ${
          seccionesAbiertas[seccion] 
            ? "border-[#FFB300]/50 shadow-[#FFB300]/5" 
            : "border-white/10 hover:border-white/20"
        }`}
      >
        <button
          className={`w-full text-left p-4 flex justify-between items-center transition-colors duration-300 ${
            seccionesAbiertas[seccion] 
              ? "bg-black text-white" 
              : "bg-black/80 text-gray-200 hover:bg-black hover:text-white"
          }`}
          onClick={() => toggleSeccion(seccion)}
        >
          <span className="font-medium tracking-wide">{secciones[seccion].titulo}</span>
          {seccionesAbiertas[seccion] ? (
            <ChevronUp className="h-5  w-5 text-[#FFB300]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-[#FFB300]" />
          )}
        </button>

        {seccionesAbiertas[seccion] && (
          <div className="p-5 bg-[#0a0a0a] border-t border-[#FFB300]/20">
            <h3 className="text-lg text-[#FFB300] font-light mb-4 tracking-wide">{secciones[seccion].subtitulo}</h3>
            <div className="prose max-w-none text-gray-300">{secciones[seccion].contenido}</div>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default MobileSectionsPhoto;
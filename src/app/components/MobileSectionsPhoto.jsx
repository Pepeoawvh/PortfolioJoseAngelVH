import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MobileSectionsPhoto = ({ secciones, seccionesAbiertas, toggleSeccion }) => (
  <div className="space-y-2">
    {Object.keys(secciones).map((seccion) => (
      <div key={seccion} className="border border-gray-300 rounded-md overflow-hidden">
        <button
          className={`w-full text-left p-4 flex justify-between items-center ${
            seccionesAbiertas[seccion] ? "bg-gray-800 text-white" : "bg-gray-800"
          }`}
          onClick={() => toggleSeccion(seccion)}
        >
          <span className="font-semibold">{secciones[seccion].titulo}</span>
          {seccionesAbiertas[seccion] ? (
            <ChevronUp className="h-5 w-5 text-[#FFB300]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>

        {seccionesAbiertas[seccion] && (
          <div className="p-4 bg-[#191923]">
            <h3 className="text-lg text-[#FFB300] mb-4">{secciones[seccion].subtitulo}</h3>
            <div className="prose max-w-none">{secciones[seccion].contenido}</div>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default MobileSectionsPhoto;
import React from "react";

const DesktopSectionsPhoto = ({ secciones, seccionActiva, setSeccionActiva }) => (
  <>
    <section className="bg-gray-800 px-4 md:px-12 py-2 text-sm text-white">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-items-center">
        {Object.keys(secciones).map((seccion) => (
          <button
            key={seccion}
            className={`border-2 ${
              seccionActiva === seccion ? "border-[#FFB300] bg-gray-700" : "border-gray-600 hover:border-[#FFB300]"
            } h-10 w-full rounded transition-all duration-300 text-shadow-md hover:text-[#FFB300]`}
            onClick={() => setSeccionActiva(seccion)}
          >
            <span>{secciones[seccion].titulo}</span>
          </button>
        ))}
      </div>
    </section>

    <section className="px-4 md:px-12 py-8">
      <div className="max-w-4xl mx-auto rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{secciones[seccionActiva].titulo}</h2>
        <h3 className="text-lg text-[#FFB300] mb-6">{secciones[seccionActiva].subtitulo}</h3>
        <div className="prose max-w-none">{secciones[seccionActiva].contenido}</div>
      </div>
    </section>
  </>
);

export default DesktopSectionsPhoto;
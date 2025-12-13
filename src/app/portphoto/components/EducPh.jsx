import React from "react";

const EducPh = () => {
  const educacion = [
    {
      src: "/images/projects/photo/educ/collageab.jpg",
      title: "Taller El viaje de la luz - Colegio Andrés Bello",
      description: "Taller de fotografía experimental para estudiantes de enseñanza media con actividades prácticas y teoría.",
      externalLink: "https://www.behance.net/gallery/239729639/Taller-El-viaje-de-la-luz-Colegio-Andres-Bello",
      type: "external",
    },
    {
      src: "/images/projects/photo/educ/porticp.jpg",
      title: "Taller El viaje de la luz - Colegio ICP",
      description: "Taller introductorio de fotografía para estudiantes de enseñanza básica con actividades prácticas y teoría.",
      externalLink: "https://www.behance.net/gallery/239732279/Taller-El-viaje-de-la-luz-Colegio-ICP",
      type: "external",
    },
    {
      src: "/images/projects/photo/educ/evl1.jpg",
      title: "Triptico: El viaje de la Luz 1",
      description: "Triptico informativo para estudiantes de educación Básica y Media con información introductoria del taller.",
      pdf: "/docs/educ/evl1.pdf",
      type: "download",
    },
    {
      src: "/images/projects/photo/educ/evl2.jpg",
      title: "Triptico: El viaje de la Luz 2",
      description: "Triptico con ejercicios de concentración y percepción visual para estudiantes.",
      pdf: "/docs/educ/evl2.pdf",
      type: "download",
    },
    {
      src: "/images/projects/photo/educ/evl3.jpg",
      title: "Triptico: El viaje de la Luz 3",
      description: "Triptico sobre composición, encuadre y búsqueda de inspiración fotográfica.",
      pdf: "/docs/educ/evl3.pdf",
      type: "download",
    },
    {
      src: "/images/projects/photo/educ/evl4.jpg",
      title: "Triptico: El viaje de la Luz 4",
      description: "Triptico sobre revelado analógico para actividades del taller de fotografía.",
      pdf: "/docs/educ/evl4.pdf",
      type: "download",
    },
  ];

  return (
    <div className="grid select-none grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {educacion.map((material, index) => (
        <div key={index} className="relative border p-4 rounded-md overflow-hidden group">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ backgroundImage: `url(${material.src})` }}
          />

          {/* Overlay negro */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Contenido ✅ CORREGIDO: line-clamp + responsive text */}
          <div className="relative z-10 text-white h-full flex flex-col p-4">
            <h3 className="text-base md:text-lg font-semibold line-clamp-2 mb-2 leading-tight">
              {material.title}
            </h3>
            <p className="text-xs md:text-sm line-clamp-2 flex-1 tracking-wide leading-relaxed">
              {material.description}
            </p>

            <div className="mt-auto pt-2">
              {material.type === "download" ? (
                <a
                  href={material.pdf}
                  download
                  className="inline-block px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-yellow-400 hover:text-white transition-colors text-xs md:text-sm"
                >
                  Descargar PDF
                </a>
              ) : (
                <a
                  href={material.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-yellow-400 hover:text-white transition-colors text-xs md:text-sm"
                >
                  Ver más →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducPh;

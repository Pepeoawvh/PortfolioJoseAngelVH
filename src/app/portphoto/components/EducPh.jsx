import React from "react";

const EducPh = () => {
  const educacion = [
    // Materiales con descarga PDF (originales)
        // NUEVOS materiales con enlace externo "Ver más"
    {
      src: "/images/projects/photo/educ/collageab.jpg",
      title: "Taller /El viaje de la luz\\ - Colegio Industrial Andrés Bello",
      description:
        "Taller de fotografía experimental para estudiantes de enseñanza media con actividades prácticas y teoría.",
      externalLink: "https://www.behance.net/gallery/239729639/Taller-El-viaje-de-la-luz-Colegio-Andres-Bello",
      type: "external", // Nuevo tipo
    },
    {
      src: "/images/projects/photo/educ/porticp.jpg",
      title: "Taller /El viaje de la luz\\ - Colegio Ignacio Carrera Pinto",
      description:
        "Taller introductorio de fotografía  para estudiantes de enseñanza básica con actividades prácticas y teoría.",
      externalLink: "https://www.behance.net/gallery/239732279/Taller-El-viaje-de-la-luz-Colegio-ICP",
      type: "external",
    },
    {
      src: "/images/projects/photo/educ/evl1.jpg",
      title: "Triptico Educativo: El viaje de la Luz 1",
      description:
        "Triptico informativo, se entrega a estudiantes de educación Básica y Media, este número contiene informacion introductoria sobre el taller de fotografía.",
      pdf: "/docs/educ/evl1.pdf",
      type: "download", // Tipo de acción
    },
    {
      src: "/images/projects/photo/educ/evl2.jpg",
      title: "Triptico Educativo: El viaje de la Luz 2",
      description:
        "Triptico informativo, se entrega a estudiantes de educación Básica y Media, este número contiene ejercicios de concentración y percepción visual.",
      pdf: "/docs/educ/evl2.pdf",
      type: "download",
    },
    {
      src: "/images/projects/photo/educ/evl3.jpg",
      title: "Triptico Educativo: El viaje de la Luz 3",
      description:
        "Triptico informativo, se entrega a estudiantes de educación Básica y Media, este número contiene información composició, encuadre y busqueda de inspiración.",
      pdf: "/docs/educ/evl3.pdf",
      type: "download",
    },
    {
      src: "/images/projects/photo/educ/evl4.jpg",
      title: "Triptico Educativo: El viaje de la Luz 4",
      description:
        "Triptico informativo, se entrega a estudiantes de educación Básica y Media, este número contiene revelado analógico para actividades del taller.",
      pdf: "/docs/educ/evl4.pdf",
      type: "download",
    },

  ];

  // Función para renderizar el botón según el tipo
  const renderButton = (material) => {
    if (material.type === "download") {
      return (
        <a
          href={material.pdf}
          download
          className="inline-flex items-center mt-3 px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-yellow-400 hover:text-white transition-colors"
        >
          Descargar PDF
        </a>
      );
    } else if (material.type === "external") {
      return (
        <a
          href={material.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-3 px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-yellow-400 hover:text-white transition-colors"
        >
          Ver más →
        </a>
      );
    }
  };

  return (
    <div className="grid select-none grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {educacion.map((material, index) => (
        <div
          key={index}
          className="relative border p-4 shadow-md rounded-md overflow-hidden group"
        >
          <div
            className="absolute inset-0 shadow-md bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110 opacity-80"
            style={{ backgroundImage: `url(${material.src})` }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 text-white">
            <h3 className="text-lg font-semibold mt-2">{material.title}</h3>
            <p className="text-sm w-2/3 tracking-wide">{material.description}</p>
            {/* Botón dinámico */}
            {renderButton(material)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducPh;

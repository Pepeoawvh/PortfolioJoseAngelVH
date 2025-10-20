import React from "react";

const EducPh = () => {
  const libros = [
    {
      src: "/images/projects/photo/educ/evl1.jpg",
      title: "Triptico Educativo: El viaje de la Luz 1",
      description:
        "Triptico informativo, se entrega a estudiantes de educación Básica y Media, este número contiene informacion introductoria sobre el taller de fotografía.",
      pdf: "/docs/educ/evl1.pdf",
    },
    {
      src: "/images/projects/photo/educ/evl2.jpg",
      title: "Triptico Educativo: El viaje de la Luz 2",
      description:
        "Triptico informativo, se entrega a estudiantes de educación Básica y Media, este número contiene ejercicios de concentración y percepción visual.",
      pdf: "/docs/educ/evl2.pdf",
    },
    {
      src: "/images/projects/photo/educ/evl3.jpg",
      title: "Triptico Educativo: El viaje de la Luz 3",
      description:
        "Triptico informativo, se entrega a estudiantes de educación Básica y Media, este número contiene información composició, encuadre y busqueda de inspiración.",
      pdf: "/docs/educ/evl3.pdf",
    },    {
      src: "/images/projects/photo/educ/evl4.jpg",
      title: "Triptico Educativo: El viaje de la Luz 4",
      description:
        "Triptico informativo, se entrega a estudiantes de educación Básica y Media, este número contiene revelado analógico para actividades del taller.",
      pdf: "/docs/educ/evl4.pdf",
    },
  ]
  return (
    <div className="grid select-none grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {libros.map((libro, index) => (
        <div
          key={index}
          className="relative border p-4 shadow-md rounded-md overflow-hidden group"
        >
          <div
            className="absolute inset-0 shadow-md bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ backgroundImage: `url(${libro.src})` }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 text-white">
            <h3 className="text-lg font-semibold mt-2">{libro.title}</h3>
            <p className="text-sm w-2/3 tracking-wide ">{libro.description}</p>

            {/* Botón de descarga */}
            <a
              href={libro.pdf}
              download
              className="inline-flex items-center mt-3 px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-yellow-400 hover:text-white transition-colors"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducPh;

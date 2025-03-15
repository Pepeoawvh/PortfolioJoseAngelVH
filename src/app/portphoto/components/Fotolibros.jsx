import React from "react";
import Link from "next/link";

const Fotolibros = () => {
  const libros = [
    {
      src: "/images/projects/LCDLP.jpg",
      title: "La caza de las pantallas",
      description: "Ensayo visual y reflexivo sobre la evolución del rol de la fotografía en la era digital. Este proyecto resultó en un fotolibro que funciona como comentario crítico sobre nuestra relación con las imágenes y pantallas",
      link: "https://www.behance.net/gallery/215597665/La-caza-de-las-Pantallas",
    },
    {
      src: "/images/projects/despliegueluz.jpg",
      title: "Despliegue de la luz",
      description: "Fotolibro que explora el espectro visible a través de una aproximación tanto física como poética a la luz. Un recorrido visual por los colores y sus manifestaciones en diferentes contextos.",
      link: "/libro2",
    },
    {
      src: "/images/projects/stalkerph.jpg",
      title: "Stalker.ph",
      description: "Proyecto transmedia que combina fotografía de juegos (screenshots) con narrativa personal. Incluye componente de redes sociales con una comunidad activa de seguidores.",
      link: "/libro3",
    },
    // Agrega más libros aquí
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {libros.map((libro, index) => (
        <div
          key={index}
          className="relative border p-4 rounded-md overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ backgroundImage: `url(${libro.src})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white">
            <h3 className="text-lg font-semibold mt-2">{libro.title}</h3>
            <p className="text-sm w-1/2 text-justify">{libro.description}</p>
            <Link href={libro.link} className="text-[#FFB300] hover:text-yellow-400">
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fotolibros;
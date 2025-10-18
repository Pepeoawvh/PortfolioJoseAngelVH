import React from "react";
import Link from "next/link";

const ProyectosPh = () => {
  const libros = [
    {
      src: "/images/projects/photo/proy/jvhig.jpg",
      title: "Joseangel.vh",
      description: "Cuenta de instagram de trabajo personal, selección fotografías de autoría propia.",
      link: "https://www.instagram.com/joseangel.vh/",
    }, {
      src: "/images/projects/photo/proy/ER.jpg",
      title: "escrinshots_random",
      description: "Curatoría experimental de imagenes, en su mayoría orientadas a fotografía de pantallas (screenshots) tomadas en diferentes contextos de la vida digital, redes sociales, videojuegos, navegacion web y otros dispositivos. El proyecto explora la relación entre la imagen digital y la narrativa personal, creando un diálogo entre el espectador y las imágenes seleccionadas.",
      link: "https://www.instagram.com/escrinshots_random/",
    },
    {
      src: "/images/projects/photo/proy/pplabs.jpg",
      title: "pp.labs",
      description: "Laboratorio experimental de imagenes, es un espacio abierto a la exploración creativa. Mezclando fotografía, fotomontaje, imágenes de IA generativa, dibujo, narrativa y musica. ",
      link: "https://www.instagram.com/pp.labs/",
    },
    {
      src: "/images/projects/photo/proy/SPH.jpg",
      title: "Stalker.ph",
      description: "Proyecto transmedia que combina fotografía de juegos (screenshots) con narrativa personal. Incluye componente de redes sociales con una comunidad activa de seguidores.",
      link: "https://www.instagram.com/stalker.ph/",
    },
    // Agrega más libros aquí
  ];

  return (
    <div className="grid grid-cols-1 select-none md:grid-cols-3 gap-4 p-4">
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
            <p className="text-sm w-3/4 text-left tracking-wide ">{libro.description}</p>
            <Link href={libro.link} className="text-[#FFB300] hover:text-yellow-400">
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProyectosPh;
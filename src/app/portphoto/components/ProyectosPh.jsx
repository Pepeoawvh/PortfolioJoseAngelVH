'use client'
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDropdownClose } from "../hooks/useDropdownClose";

const ProyectosPh = ({ onClose = () => {} }) => {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  useDropdownClose(visible, handleClose, containerRef);

  const libros = [
    {
      src: "/images/projects/photo/proy/jvhig.jpg",
      title: "Joseangel.vh",
      description:
        "Cuenta de instagram de trabajo personal, selección fotografías de autoría propia.",
      link: "https://www.instagram.com/joseangel.vh/",
    },
    {
      src: "/images/projects/photo/proy/ER.jpg",
      title: "escrinshots_random",
      description:
        "Curatoría experimental de imagenes, en su mayoría orientadas a fotografía de pantallas (screenshots) tomadas en diferentes contextos de la vida digital, redes sociales, videojuegos, navegacion web y otros dispositivos. El proyecto explora la relación entre la imagen digital y la narrativa personal, creando un diálogo entre el espectador y las imágenes seleccionadas.",
      link: "https://www.instagram.com/escrinshots_random/",
    },
    {
      src: "/images/projects/photo/proy/pplabs.jpg",
      title: "pp.labs",
      description:
        "Laboratorio experimental de imagenes, es un espacio abierto a la exploración creativa. Mezclando fotografía, fotomontaje, imágenes de IA generativa, dibujo, narrativa y musica.",
      link: "https://www.instagram.com/pp.labs/",
    },
    {
      src: "/images/projects/photo/proy/SPH.jpg",
      title: "Stalker.ph",
      description:
        "Proyecto transmedia que combina fotografía de juegos (screenshots) con narrativa personal. Incluye componente de redes sociales con una comunidad activa de seguidores.",
      link: "https://www.instagram.com/stalker.ph/",
    },
    // Agrega más libros aquí
  ];

  if (!visible) return null;

  return (
    <div ref={containerRef} className="grid grid-cols-1 select-none md:grid-cols-3 gap-4 p-4">
      {libros.map((libro, index) => (
        <div
          key={index}
          className="relative border p-4 rounded-md overflow-hidden group min-h-[280px]"
        >
          {/* Imagen de fondo con next/image */}
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
            <Image
              src={libro.src}
              alt={libro.title}
              fill
              className="object-cover"
            />
          </div>
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black opacity-50" />
          {/* Contenido */}
          <div className="relative z-10 text-white">
            <h3 className="text-lg font-semibold mt-2">{libro.title}</h3>
            <p className="text-sm w-3/4 text-left tracking-wide">{libro.description}</p>
            <div className="mt-2">
              {libro.link && libro.link.startsWith("/") ? (
                <Link
                  href={libro.link}
                  className="inline-block px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-[#FFB300] hover:text-black transition-colors text-xs md:text-sm"
                >
                  Ver más
                </Link>
              ) : (
                <a
                  href={libro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-[#FFB300] hover:text-black transition-colors text-xs md:text-sm"
                >
                  Ver más
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProyectosPh;

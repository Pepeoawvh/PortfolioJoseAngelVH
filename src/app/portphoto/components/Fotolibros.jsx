'use client'
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDropdownClose } from "../hooks/useDropdownClose";

const Fotolibros = ({ onClose = () => {} }) => {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  useDropdownClose(visible, handleClose, containerRef);

  const libros = [
    {
      src: "/images/projects/photo/libros/LCDLP.jpg",
      title: "La caza de las pantallas",
      description:
        "Ensayo visual y reflexivo sobre la evolución del rol de la fotografía en la era digital. Este proyecto resultó en un fotolibro que funciona como comentario crítico sobre nuestra relación con las imágenes y pantallas",
      link: "https://www.behance.net/gallery/215597665/La-caza-de-las-Pantallas",
    },
    {
      src: "/images/projects/photo/libros/despliegueluz.jpg",
      title: "Despliegue de la luz",
      description:
        "Fotolibro que explora el espectro visible a través de una aproximación tanto física como poética a la luz. Un recorrido visual por los colores y sus manifestaciones en diferentes contextos.",
      link: "/portphoto",
    },
    {
      src: "/images/projects/photo/libros/stalkerph.jpg",
      title: "Stalker.ph",
      description:
        "Proyecto transmedia que combina fotografía de juegos (screenshots) con narrativa personal. Incluye componente de redes sociales con una comunidad activa de seguidores.",
      link: "https://www.instagram.com/stalker.ph/",
    },
    // Agrega más libros aquí
  ];

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="grid select-none grid-cols-1 md:grid-cols-3 gap-4 p-4"
    >
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
          <div className="relative z-10 text-white h-full flex flex-col p-4">
            <h3 className="text-lg font-semibold mb-2">{libro.title}</h3>
            <p className="text-sm tracking-wide leading-relaxed">{libro.description}</p>
            <div className="mt-auto pt-4">
              {libro.link && libro.link.startsWith("/") ? (
                <Link
                  href={libro.link}
                  className="inline-block px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-[#FFB300] hover:text-black transition-colors text-xs md:text-sm"
                >
                  Ver más →
                </Link>
              ) : (
                <a
                  href={libro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 rounded-md text-[#FFB300] border border-[#FFB300] hover:bg-[#FFB300] hover:text-black transition-colors text-xs md:text-sm"
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

export default Fotolibros;

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ProyectosPh = ({ onClose = () => {} }) => {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);

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

  useEffect(() => {
    if (!visible) return;

    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setVisible(false);
        onClose();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setVisible(false);
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div ref={containerRef} className="grid grid-cols-1 select-none md:grid-cols-3 gap-4 p-4">
      {libros.map((libro, index) => (
        <div
          key={index}
          className="relative border p-4 rounded-md overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ backgroundImage: `url(${libro.src})` }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 text-white">
            <h3 className="text-lg font-semibold mt-2">{libro.title}</h3>
            {/* Mantengo la descripción completa sin resumir */}
            <p className="text-sm w-3/4 text-left tracking-wide">{libro.description}</p>

            {/* Link condicional para rutas internas y externas */}
            <div className="mt-2">
              {libro.link && libro.link.startsWith("/") ? (
                <Link href={libro.link} className="text-[#FFB300] hover:text-yellow-400">
                  Ver más
                </Link>
              ) : (
                <a
                  href={libro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFB300] hover:text-yellow-400"
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
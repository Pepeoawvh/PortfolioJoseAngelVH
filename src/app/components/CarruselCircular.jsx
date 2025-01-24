"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Lista de imágenes para el carrusel
const images = [
  "/images/photos/profileBackground/camaraNaranja.jpg",
  "/images/photos/profileBackground/cerroMisterio.jpg",
  "/images/photos/profileBackground/laserYellow.jpg",
  "/images/photos/profileBackground/norte1234.jpg",
  "/images/photos/profileBackground/prismaYellow.jpg",
  "/images/photos/profileBackground/ptoNatales.jpg",
  "/images/photos/profileBackground/ValdiHumedal.jpg",
  "/images/photos/profileBackground/ValdiPink.jpg",
  "/images/photos/profileBackground/ArbolOrange.jpg",
  "/images/photos/profileBackground/ArbolPink.jpg",
  "/images/photos/profileBackground/ZoomOutCieloEsponja.jpg",
  "/images/photos/profileBackground/Glaciar.jpg",
  "/images/photos/profileBackground/basilica.jpg",
  "/images/photos/profileBackground/CirueloWhiteBlue.jpg",
  "/images/photos/profileBackground/cami2.jpg",
  "/images/photos/profileBackground/mirrorcellar.jpg",
  "/images/photos/profileBackground/laser2.jpg",
  "/images/photos/profileBackground/contraLuz.jpg",
];

const CarruselCircular = ({ width = "100%", height = "400px" }) => {
  // Estado para el índice de la imagen actual
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Función para cambiar la imagen
    const changeImage = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia al siguiente índice
    };

    // Cambia la imagen cada 7 segundos
    const intervalId = setInterval(changeImage, 7000);

    // Limpieza al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-[#191923] opacity-80"
      style={{ width, height }}
    >
      {/* Imagen del carrusel */}
      <Image
        src={images[index]}
        alt="Imagen del slideshow"
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-1000 ease-in-out"
      />
    </div>
  );
};

export default CarruselCircular;
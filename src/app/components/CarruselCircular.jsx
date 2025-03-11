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

const CarruselCircular = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto relative group p-12 bg-white rounded mt-4">
      <div className="relative aspect-[3/4] sm:aspect-video md:aspect-[16/9] rounded shadow  lg:aspect-[21/9] overflow-hidden bg-[#191923] opacity-95">
        <Image
          src={images[index]}
          alt="Imagen del slideshow"
          fill
          priority
          quality={100}
          sizes="(max-width: 640px) 100vw,
                 (max-width: 768px) 100vw,
                 (max-width: 1024px) 100vw,
                 100vw"
          className="object-cover object-center transition-opacity shadow-md duration-1500 ease-in-out"
        />
        
        {/* Efecto de overlay para transiciones */}
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-1000" />
      </div>
    </div>
  );
};

export default CarruselCircular;
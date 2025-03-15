import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/photos/aboutphotopic1.jpg", position: "center 70%" },
  { src: "/images/photos/aboutphotopic2.jpg", position: "center 65%" },
  { src: "/images/photos/aboutphotopic3.jpg", position: "center 40%" },
  { src: "/images/photos/aboutphotopic4.jpg", position: "center 30%" },
  { src: "/images/photos/aboutphotopic5.jpg", position: "center 70%" },
  { src: "/images/photos/aboutphotopic6.jpg", position: "center 40%" },
  { src: "/images/photos/aboutphotopic7.jpg", position: "center 50%" },
];

const HeaderPhoto = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Duración del fade
    }, 6000); // Intervalo entre cambios de imagen

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative grid grid-cols-1 md:grid-cols-[0.71fr,1fr] items-center text-center py-6 mt-20 bg-gray-800 text-white">
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}>
        <Image
          src={images[currentImageIndex].src}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition={images[currentImageIndex].position}
          quality={100}
          className="absolute inset-0 z-0"
        />
      </div>
      <div className="relative z-10 gap-4 items-center">
        <h1 className="text-2xl md:text-3xl font-bold" style={{ letterSpacing: "0.1em" }}>
          José Valdés Hernández
        </h1>
        <p className="text-lg text-[#FFB300]" style={{ letterSpacing: "0.05em" }}>
          Fotógrafo Profesional y Artista Visual
        </p>
      </div>
      <section className="relative z-10 text-center px-4 md:px-12 py-6">
        <p className="text-sm mx-auto text-left" style={{ letterSpacing: "0.05em" }}>
          Soy un fotógrafo profesional con más de 12 años de experiencia en distintos géneros fotográficos, especializado en técnicas de larga exposición, fotografía de paisaje y fotografía arquitectónica 360°.
        </p> 
        <div className="grid justify-items-center md:justify-items-start grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <Link
    href="/docs/JVCVPH25.pdf"
    download="JVCVPH25.pdf"
    className="inline-block px-6 py-2 text-sm font-medium text-white bg-[#121212] border-2 border-[#FFB300] rounded- transition-all rounded duration-300 hover:bg-[#FFB300] hover:text-black"
  >
    Descargar CV
  </Link>
</div>
      </section>
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
    </header>
  );
};

export default HeaderPhoto;
"use client";
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
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative select-none overflow-hidden min-h-[340px] md:min-h-[400px] flex items-end">
      {/* Imagen de fondo rotativa */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}>
        <Image
          src={images[currentImageIndex].src}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: images[currentImageIndex].position }}
          quality={90}
          priority
        />
      </div>

      {/* Gradiente oscuro bottom-up para legibilidad del texto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-black/10" />

      {/* Contenido del header */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 pb-10 pt-16 grid md:grid-cols-2 gap-8 items-end">
        {/* Columna izquierda — identidad */}
        <div>
          <p className="text-xs font-mono tracking-[0.2em] text-[#FFB300]/70 uppercase mb-3">
            Portafolio Fotográfico
          </p>
          <h1
            className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-2"
          >
            José Angel Valdés<br className="hidden md:block" /> Hernández
          </h1>
          <p className="text-[#FFB300] text-base md:text-lg font-light tracking-widest uppercase">
            Fotógrafo Profesional&nbsp;/&nbsp;Desarrollador Web
          </p>
        </div>

        {/* Columna derecha — resumen + CTA */}
        <div className="flex flex-col gap-5">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Más de 12 años de trayectoria en fotografía profesional. Especializado en larga
            exposición, paisaje y arquitectura 360°. Titulado del IP Arcos (2018).
          </p>
          <div>
            <Link
              href="/docs/JVCVPH25.pdf"
              download="JVCVPH25.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-transparent border border-[#FFB300] transition-all duration-300 hover:bg-[#FFB300] hover:text-black"
            >
              Descargar CV
            </Link>
          </div>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-[#FFB300]/40 to-transparent" />
    </header>
  );
};

export default HeaderPhoto;

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
  const [fadeIn, setFadeIn] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef(null); // Referencia para controlar el temporizador
  const AUTOPLAY_INTERVAL = 8000; // 8 segundos para el cambio automático
  const FADE_DURATION = 300; // Duración de la transición de fade

  // Función para cambiar la imagen con control de animación
  const changeImage = (newIndex) => {
    setFadeIn(false);
    
    setTimeout(() => {
      setIndex(newIndex);
      setFadeIn(true);
    }, FADE_DURATION);
  };

  // Función para avanzar a la siguiente imagen
  const handleNext = () => {
    // Calcular el nuevo índice
    const nextIndex = (index + 1) % images.length;
    
    // Cambiar la imagen
    changeImage(nextIndex);
    
    // Reiniciar el temporizador
    resetAutoplayTimer();
  };

  // Función para retroceder a la imagen anterior
  const handlePrevious = () => {
    // Calcular el nuevo índice
    const prevIndex = index === 0 ? images.length - 1 : index - 1;
    
    // Cambiar la imagen
    changeImage(prevIndex);
    
    // Reiniciar el temporizador
    resetAutoplayTimer();
  };

  // Función para reiniciar el temporizador
  const resetAutoplayTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Reiniciar autoplay pero mantener el estado
    setAutoplay(true);
  };

  // Gestionar el autoplay
  useEffect(() => {
    // Limpiar el temporizador existente
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Si autoplay está activo, configurar un nuevo temporizador
    if (autoplay) {
      timerRef.current = setTimeout(() => {
        // Avanza automáticamente a la siguiente imagen
        const nextIndex = (index + 1) % images.length;
        changeImage(nextIndex);
      }, AUTOPLAY_INTERVAL);
    }
    
    // Limpieza al desmontar o cambiar de dependencias
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [autoplay, index]); // Dependencias: autoplay y el índice actual

  return (
    <div className="select-none w-full max-w-7xl mx-auto relative group mt-4">
      {/* Marco exterior con sombra para dar profundidad */}
      <div className="bg-white rounded-md p-12 shadow-[0_5px_25px_rgba(0,0,0,0.15)]">
        {/* Contenedor de la imagen con borde sutil */}
        <div className="relative aspect-[3/4] sm:aspect-video md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#131318] rounded border border-gray-200">
          {/* Imagen actual con transiciones suaves */}
          <Image
            src={images[index]}
            alt="Fotografía en exhibición"
            fill
            priority
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className={`object-cover object-center transition-all duration-500 ease-in-out ${
              fadeIn 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-[1.02]'
            }`}
          />
          
          {/* Sutil viñeta fotográfica */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] pointer-events-none"></div>
          
          {/* Botones de navegación - Solo visibles al hacer hover en desktop */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            {/* Botón anterior */}
            <button 
              onClick={handlePrevious}
              className="h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm opacity-0 md:opacity-40 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300 hover:bg-black/50"
              aria-label="Imagen anterior"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
            
            {/* Botón siguiente */}
            <button 
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm opacity-0 md:opacity-40 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300 hover:bg-black/50"
              aria-label="Imagen siguiente"
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          
          {/* Indicadores de posición estilo negativo fotográfico */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 transition-all duration-300 ${
                  i === index 
                    ? 'w-6 bg-white/90' 
                    : 'w-1.5 bg-white/40'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Firma de fotógrafo */}
        <div className="flex justify-between items-center mt-3 px-1">
          <p className="text-xs text-gray-500 italic font-light">
            #{index + 1}/{images.length}
          </p>
          <p className="text-xs text-gray-500 font-semibold tracking-wide">
            José Angel Valdés H.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarruselCircular;
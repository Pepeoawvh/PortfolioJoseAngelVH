"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Lista de imágenes (usa tu array existente)
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
  "/images/photos/profileBackground/cami2.jpg",
  "/images/photos/profileBackground/mirrorcellar.jpg",
  "/images/photos/profileBackground/laser2.jpg",
  "/images/photos/profileBackground/contraLuz.jpg",
];

export default function CarruselCircular() {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [autoplay, setAutoplay] = useState(true);

  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const AUTOPLAY_INTERVAL = 8000; // 8s
  const FADE_DURATION = 300; // ms

  const safeClear = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    safeClear();
    if (!autoplay || images.length <= 1) return;
    timerRef.current = setTimeout(() => {
      changeImage((index + 1) % images.length, { fromTimer: true });
    }, AUTOPLAY_INTERVAL);
  }, [autoplay, index]);

  const changeImage = (newIndex, { fromTimer = false } = {}) => {
    setFadeIn(false);
    setTimeout(() => {
      setIndex(newIndex);
      setFadeIn(true);
      // Si no viene del timer, reprograma el timer para que se reinicie al interactuar
      if (!fromTimer) startTimer();
    }, FADE_DURATION);
  };

  const next = useCallback(() => {
    setAutoplay(true); // permitimos que continúe después de interacción
    changeImage((index + 1) % images.length);
  }, [index, startTimer]);

  const prev = useCallback(() => {
    setAutoplay(true);
    changeImage(index === 0 ? images.length - 1 : index - 1);
  }, [index, startTimer]);

  // Autoplay lifecycle
  useEffect(() => {
    startTimer();
    return () => safeClear();
  }, [startTimer]);

  // Pausar/reanudar en hover/focus (mejora UX)
  const pause = () => {
    setAutoplay(false);
    safeClear();
  };
  const resume = () => {
    setAutoplay(true);
    startTimer();
  };

  // Navegación por teclado
  useEffect(() => {
    const onKey = (e) => {
      // Solo si el usuario está sobre el carrusel o no hay foco específico
      const within =
        containerRef.current &&
        (containerRef.current.contains(document.activeElement) ||
          document.activeElement === document.body);

      if (!within) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        pause();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      ref={containerRef}
      className="select-none w-full max-w-7xl mx-auto relative"
      aria-roledescription="carousel"
      aria-label="Carrusel de fotografías"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="bg-white rounded-md p-12 shadow-[0_5px_25px_rgba(0,0,0,0.15)]">
        <div className="relative aspect-[3/4] sm:aspect-video md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#131318] rounded border border-gray-200">
          <Image
            src={images[index]}
            alt={`Fotografía ${index + 1} de ${images.length}`}
            fill
            priority
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className={`object-cover object-center transition-all duration-500 ease-in-out ${
              fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
            }`}
          />

          {/* Viñeta fotográfica */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] pointer-events-none" />

          {/* Controles (visibles en mobile y desktop; más opacos al hover en desktop) */}
          <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Imagen anterior"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB300] active:scale-95"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Imagen siguiente"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB300] active:scale-95"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === index ? "true" : "false"}
                onClick={() => changeImage(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white/90" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Pie de foto */}
        <div className="flex justify-between items-center mt-3 px-1">
          <p className="text-xs text-gray-500 italic font-light">
            #{index + 1}/{images.length}
          </p>
          <p className="text-xs text-gray-500 font-semibold tracking-wide">
            José Angel Valdés H.
          </p>
        </div>
      </div>
    </section>
  );
}

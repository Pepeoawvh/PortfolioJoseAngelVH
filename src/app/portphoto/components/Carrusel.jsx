"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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

export default function Carrusel() {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [pendingIndex, setPendingIndex] = useState(null);

  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const AUTOPLAY_INTERVAL = 8000;
  const FADE_DURATION = 300;
  const LOAD_TIMEOUT = 8000;

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
      handleChange((index + 1) % images.length, { fromTimer: true });
    }, AUTOPLAY_INTERVAL);
  }, [autoplay, index]);

  // Preload y cambio seguro
  const preloadAndSwap = (target) => {
    if (target === index) return;

    setIsLoading(true);
    setPendingIndex(target);

    const img = new window.Image();
    let done = false;

    const finalize = () => {
      if (done) return;
      done = true;
      setFadeIn(false);
      setTimeout(() => {
        setIndex(target);
        setFadeIn(true);
        setIsLoading(false);
        setPendingIndex(null);
      }, FADE_DURATION);
    };

    const timer = setTimeout(finalize, LOAD_TIMEOUT);

    img.onload = () => {
      clearTimeout(timer);
      finalize();
    };
    img.onerror = () => {
      clearTimeout(timer);
      finalize();
    };
    img.src = images[target];
  };

  const handleChange = (newIndex, { fromTimer = false } = {}) => {
    if (isLoading) return;
    preloadAndSwap(newIndex);
    if (!fromTimer) {
      safeClear();
      setAutoplay(true);
      startTimer();
    }
  };

  const next = useCallback(() => {
    if (isLoading) return;
    handleChange((index + 1) % images.length);
  }, [index, isLoading]);

  const prev = useCallback(() => {
    if (isLoading) return;
    handleChange(index === 0 ? images.length - 1 : index - 1);
  }, [index, isLoading]);

  // Autoplay lifecycle
  useEffect(() => {
    startTimer();
    return () => safeClear();
  }, [startTimer]);

  // Hover pause/resume
  const pause = () => {
    setAutoplay(false);
    safeClear();
  };
  const resume = () => {
    setAutoplay(true);
    startTimer();
  };

  // Teclado
  useEffect(() => {
    const onKey = (e) => {
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
      className="select-none w-screen h-[70vh] min-h-[500px] max-h-[800px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      aria-roledescription="carousel"
      aria-label="Carrusel de fotografías"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Contenedor principal que ocupa todo el espacio */}
      <div className="relative w-full h-full bg-[#131318] overflow-hidden">
        {/* Imagen actual */}
        <Image
          key={images[index]}
          src={images[index]}
          alt={`Fotografía ${index + 1} de ${images.length}`}
          fill
          priority={index === 0}
          quality={90}
          sizes="100vw"
          className={`object-cover object-center transition-all duration-500 ease-in-out ${
            fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-[1.01]"
          }`}
        />

        {/* Overlay de carga */}
        {isLoading && (
          <div
            aria-live="polite"
            className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]"
          >
            <div className="h-10 w-10 rounded-full border-2 border-white/40 border-t-white animate-spin" />
          </div>
        )}

        {/* Viñeta sutil */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)] pointer-events-none" />

        {/* Controles */}
        <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            disabled={isLoading}
            className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB300] active:scale-95 backdrop-blur-sm
              ${isLoading ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
          >
            <ChevronLeftIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Imagen siguiente"
            disabled={isLoading}
            className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB300] active:scale-95 backdrop-blur-sm
              ${isLoading ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
          >
            <ChevronRightIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a la imagen ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
              onClick={() => !isLoading && handleChange(i)}
              disabled={isLoading}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index 
                  ? "w-8 bg-white/90" 
                  : "w-2 bg-white/40 hover:bg-white/70 hover:w-4"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          ))}
        </div>

        {/* Pie de foto superpuesto */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-12 pb-4 px-4 sm:px-6">
          <div className="flex justify-between items-center text-white">
            <p className="text-sm sm:text-base font-light opacity-90">
              #{index + 1}/{images.length}
            </p>
            <p className="text-sm sm:text-base font-medium opacity-90">
              José Angel Valdés H.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
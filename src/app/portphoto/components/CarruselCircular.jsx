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

export default function CarruselCircular() {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [autoplay, setAutoplay] = useState(true);

  // nuevo: estados de carga
  const [isLoading, setIsLoading] = useState(false);
  const [pendingIndex, setPendingIndex] = useState(null);

  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const AUTOPLAY_INTERVAL = 8000;
  const FADE_DURATION = 300;
  const LOAD_TIMEOUT = 8000; // seguridad si el onload no dispara

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
    // si ya está en ese índice, no hagas nada
    if (target === index) return;

    setIsLoading(true);
    setPendingIndex(target);

    const img = new window.Image();
    let done = false;

    const finalize = () => {
      if (done) return;
      done = true;
      // ejecutar transición
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
      // si falla la carga, de todos modos intenta el swap para no bloquear
      clearTimeout(timer);
      finalize();
    };
    img.src = images[target];
  };

  const handleChange = (newIndex, { fromTimer = false } = {}) => {
    // Evita iniciar otra carga si ya hay una en curso
    if (isLoading) return;
    // Inicia preload
    preloadAndSwap(newIndex);
    // Reprograma autoplay solo cuando viene por interacción
    if (!fromTimer) {
      safeClear();
      setAutoplay(true);
      startTimer();
    }
  };

  const next = useCallback(() => {
    if (isLoading) return;
    handleChange((index + 1) % images.length);
  }, [index, isLoading, startTimer]);

  const prev = useCallback(() => {
    if (isLoading) return;
    handleChange(index === 0 ? images.length - 1 : index - 1);
  }, [index, isLoading, startTimer]);

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
      className="select-none w-full max-w-7xl mx-auto relative"
      aria-roledescription="carousel"
      aria-label="Carrusel de fotografías"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="bg-white rounded-md p-12 shadow-[0_5px_25px_rgba(0,0,0,0.15)]">
        <div className="relative aspect-[3/4] sm:aspect-video md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#131318] rounded border border-gray-200">
          {/* Imagen actual */}
          <Image
            key={images[index]} // asegura transición
            src={images[index]}
            alt={`Fotografía ${index + 1} de ${images.length}`}
            fill
            priority={index === 0}
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className={`object-cover object-center transition-all duration-500 ease-in-out ${
              fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-[1.01]"
            }`}
          />

          {/* Overlay de carga cuando se prepara la siguiente */}
          {isLoading && (
            <div
              aria-live="polite"
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]"
            >
              <div className="h-10 w-10 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            </div>
          )}

          {/* Viñeta */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] pointer-events-none" />

          {/* Controles */}
          <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Imagen anterior"
              disabled={isLoading}
              className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB300] active:scale-95
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Imagen siguiente"
              disabled={isLoading}
              className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB300] active:scale-95
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
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
                onClick={() => !isLoading && handleChange(i)}
                disabled={isLoading}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white/90" : "w-1.5 bg-white/40 hover:bg-white/70"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Pie */}
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

"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

const CAROUSEL_IMAGES = [
  "/images/photos/profileBackground/camaraNaranja.jpg",
  "/images/photos/profileBackground/cerroMisterio.jpg",
  "/images/photos/profileBackground/laserYellow.jpg",
  "/images/photos/profileBackground/campanitas.jpg",
  "/images/photos/profileBackground/norte1234.jpg",
  "/images/photos/profileBackground/ptoNatales.jpg",
  "/images/photos/profileBackground/Florpurple.jpg",
  "/images/photos/aboutphotopic7.jpg",
  "/images/photos/aboutphotopic3.jpg",
  "/images/photos/aboutphotopic1.jpg",
  "/images/photos/profileBackground/ValdiHumedal.jpg",
  "/images/photos/profileBackground/ValdiPink.jpg",
  "/images/photos/profileBackground/ArbolOrange.jpg",
  "/images/photos/profileBackground/ArbolPink.jpg",
  "/images/photos/profileBackground/ZoomOutCieloEsponja.jpg",
  "/images/photos/profileBackground/Glaciar.jpg",
  "/images/photos/profileBackground/FlorPink.jpg",
  "/images/photos/profileBackground/basilica.jpg",
  "/images/photos/profileBackground/cami2.jpg",
  "/images/photos/profileBackground/mirrorcellar.jpg",
];

export default function Carrusel() {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
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
    if (!autoplay || CAROUSEL_IMAGES.length <= 1) return;
    timerRef.current = setTimeout(() => {
      handleChange((index + 1) % CAROUSEL_IMAGES.length, { fromTimer: true });
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
    img.src = CAROUSEL_IMAGES[target];
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
    handleChange((index + 1) % CAROUSEL_IMAGES.length);
  }, [index, isLoading]);

  const prev = useCallback(() => {
    if (isLoading) return;
    handleChange(index === 0 ? CAROUSEL_IMAGES.length - 1 : index - 1);
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

  // Pausa/reanuda por botón (persiste entre hovers)
  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false);
      resume();
    } else {
      setIsPaused(true);
      pause();
    }
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
        togglePause();
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
      onMouseEnter={() => { if (!isPaused) pause(); }}
      onMouseLeave={() => { if (!isPaused) resume(); }}
    >
      {/* Contenedor principal que ocupa todo el espacio */}
      <div className="relative w-full h-full bg-[#131318] overflow-hidden">
        {/* Imagen actual */}
        <Image
          key={CAROUSEL_IMAGES[index]}
          src={CAROUSEL_IMAGES[index]}
          alt={`Fotografía ${index + 1} de ${CAROUSEL_IMAGES.length}`}
          fill
          priority={index === 0}
          quality={90}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-500 ease-in-out
    ${
      fadeIn
        ? "opacity-100 animate-[slowZoomIn_20s_ease-in-out_forwards]"
        : "opacity-0"
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

        {/* Botón pausa/reanudar — WCAG 2.2.2: el usuario puede detener el autoplay */}
        <button
          type="button"
          onClick={togglePause}
          aria-label={isPaused ? "Reanudar presentación" : "Pausar presentación"}
          aria-pressed={isPaused}
          className="absolute bottom-10 right-4 sm:right-6 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB300] focus:ring-offset-1 focus:ring-offset-black/40"
        >
          {isPaused
            ? <PlayIcon className="h-5 w-5" aria-hidden="true" />
            : <PauseIcon className="h-5 w-5" aria-hidden="true" />
          }
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a la imagen ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
              onClick={() => !isLoading && handleChange(i)}
              disabled={isLoading}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-[#FFB300]"
                  : "w-2 bg-white/40 hover:bg-white/70 hover:w-4"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          ))}
        </div>

        {/* Pie de foto superpuesto */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-12 pb-4 px-4 sm:px-6">
          <div className="flex justify-between items-center text-white">
            <p className="text-sm sm:text-base font-light opacity-90">
              #{index + 1}/{CAROUSEL_IMAGES.length}
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

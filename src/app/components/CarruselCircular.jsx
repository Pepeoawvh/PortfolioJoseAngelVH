"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/carrusel.module.css";
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
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const changeImage = () => {
      setFade(false); // Inicia el fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Inicia el fade in
      }, 1000); // Espera 1 segundo para iniciar el fade in
    };

    // Cambia la imagen cada 7 segundos
    const intervalId = setInterval(changeImage, 7000);

    // Limpieza al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className={`flex bg-[#191923] row-span-2 sm:col-span-6 w-[full] h-[400px] sm:w-[1000px] sm:h-[1000px] overflow-hidden opacity-80 mb-7 z-10 sm:relative sm:right-[-30px] sm:top-[-230px] top-[100px] sm:left-[100px]  left-[-0px] absolute`}
      >
        <div
          className={` ${styles.radialFade} row-span-1 sm:col-span-6 w-[100%] h-[100%] absolute  z-20 justify-self-center`}
        ></div>
        <Image
          src={images[index]}
          alt="Imagen del slideshow"
          className={` object-cover w-[full] h-full z-0 ${
            fade ? styles.fadeIn : styles.fadeOut
          }`}
          width={4000}
          height={4000}
        />
      </div>
    </>
  );
};

export default CarruselCircular;

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/carrusel.module.css";
const images = [
  "/images/photos/profileBackground/camaraNaranja.jpg",
  "/images/photos/profileBackground/cerroMisterio.jpg",
  "/images/photos/profileBackground/CirueloWhiteBlue.jpg",
  "/images/photos/profileBackground/FLores.jpg",
  "/images/photos/profileBackground/laserYellow.jpg",
  "/images/photos/profileBackground/norte1234.jpg",
  "/images/photos/profileBackground/prismaYellow.jpg",
  "/images/photos/profileBackground/ptoNatales.jpg",
  "/images/photos/profileBackground/ValdiHumedal.jpg",
  "/images/photos/profileBackground/ValdiPink.jpg",
  "/images/photos/profileBackground/ZoomOutCieloEsponja.jpg",
]; // Añade todas las rutas de tus imágenes aquí

const CarruselCircular = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const changeImage = () => {
      setFade(false); // Inicia el fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Inicia el fade in
      }, 1000); // Espera 2 segundos para iniciar el fade in
    };

    // Cambia la imagen cada 7 segundos
    const intervalId = setInterval(changeImage, 7000);

    // Limpieza al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="justify-self-center top-[100px] sm:grid absolute sm:-top-1/4 sm:-right-40 -z-0">
      <div
        className={`rounded-full bg-[#191923]  w-[380px] h-[380px] lg:w-[900px] lg:h-[900px] overflow-hidden opacity-80 -z-80`}
      >
        <Image
          src={images[index]}
          alt="Imagen del slideshow"
          className={`object-cover w-full h-full ${
            fade ? styles.fadeIn : styles.fadeOut
          } ${styles.sombraCirular}  `}
          width={4000}
          height={4000}
        />
      </div>
    </div>
  );
};

export default CarruselCircular;

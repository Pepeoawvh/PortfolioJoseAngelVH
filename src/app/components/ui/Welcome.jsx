"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
  const [isWebClicked, setIsWebClicked] = useState(false);
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);

  const handleWebClick = () => {
    setIsWebClicked(true);
    setIsPhotoClicked(false);
  };

  const handlePhotoClick = () => {
    setIsPhotoClicked(true);
    setIsWebClicked(false);
  };

  return (
    <div className="absolute inset-0 text-gray-50 overflow-hidden">
      <div className="relative h-full">
        {/* Sección Desarrollo Web */}
        <div
          className={`absolute w-full h-full grid items-center justify-center transition-all duration-500 hover:text-white clip-path-webdev shadow-lg overflow-hidden group`}
          onClick={handleWebClick}
        >
          {/* Imagen de fondo para Web Dev */}
          <div className="absolute inset-0 transition-opacity duration-700 opacity-10  group-hover:opacity-40">
            <Image
              src="/images/photos/code.jpg" // Cambia por tu ruta de imagen
              alt="Desarrollo Web Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Overlay de color */}
          <div className="absolute inset-0 bg-[#0f2c1b] transition-opacity duration-500 opacity-80 group-hover:opacity-80"></div>

          <Link
            href="/webdev"
            className={`relative z-10 text-xl select-none mr-36 sm:mr-40 mb-44 tracking-wider transition-all duration-300 border border-transparent ${
              isWebClicked
                ? "bg-black/80 shadow-lg shadow-[#2ecc71]/20 text-[#2ecc71] py-3 px-0 md:px-2 rounded-md cursor-pointer border-[#2ecc71]/30"
                : "text-gray-300 cursor-pointer hover:text-[#2ecc71] hover:bg-black/70 hover:backdrop-blur-md hover:py-3 hover:px-2 hover:rounded-md hover:border-[#2ecc71]/30"
            }`}
          >
            <TypeAnimation
              sequence={["<Desarrollo Web/>", 3000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="font-mono"
            />
          </Link>
        </div>

        {/* Sección Fotografía */}
        <div
          className={`bg-black absolute w-full h-full grid items-center justify-center transition-all duration-500 hover:text-white tracking-wider clip-path-photography  shadow-lg overflow-hidden group`}
          onClick={handlePhotoClick}
        >
          {/* Imagen de fondo para Fotografía */}
          <div className="absolute inset-0 transition-opacity duration-700 opacity-15  group-hover:opacity-45">
            <Image
              src="/images/photos/profileBackground/camaraNaranja.jpg" // Cambia por tu ruta de imagen
              alt="Fotografía Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay de color */}
          <div className="absolute inset-0 bg-[#0a0a0a]/70 transition-opacity duration-500 opacity-85 group-hover:opacity-70"></div>

          <Link
            href="/portphoto"
            className={`relative z-10 ml-44 mt-36 text-xl select-none transition-all duration-300 border border-transparent ${
              isPhotoClicked
                ? "bg-black/50 shadow-lg shadow-[#FFB300]/20  text-[#FFB300] py-3 px-6 rounded-md cursor-pointer border-[#FFB300]"
                : "text-gray-400 cursor-pointer hover:text-[#FFB300] hover:backdrop-blur-md hover:bg-black/30 hover:py-3 hover:px-6 hover:rounded-md hover:border-[#FFB300]/40"
            }`}
          >
            <TypeAnimation
              sequence={["[Fotografía]", 3000]} 
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="font-serif"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
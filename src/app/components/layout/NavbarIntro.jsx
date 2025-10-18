"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarIntro = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0a0a]/100 backdrop-blur-md py-2 shadow-md shadow-black/30' 
        : 'bg-[#0a0a0a]/100 py-3'
    } z-50`}>
      <div className="container mx-auto px-4 flex justify-center">
        <Link 
          href="/" 
          className="relative group"
        >
          <Image
            src="/images/logoWhite.svg"
            alt="José Angel Valdés Portfolio"
            width={140}
            height={100}
            className="transition-transform duration-300 group-hover:scale-105 filter group-hover:brightness-125"
          />
          {/* Línea decorativa estilo fotografía (blanco y negro) */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.5px] w-0 bg-gradient-to-r from-gray-500 via-white to-gray-500 transition-all duration-300 group-hover:w-full"></div>
          
          {/* Efecto de brillo en hover (plateado) */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[1px] w-0 blur-sm bg-gray-300 opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-80"></div>
        </Link>
      </div>
    </header>
  );
};

export default NavbarIntro;
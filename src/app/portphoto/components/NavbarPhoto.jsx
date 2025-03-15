"use client";
import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    title: "Galería",
    path: "/portphoto",
  },
  {
    title: "Sobre mí",
    path: "/portphoto/aboutphoto",
  },
  {
    title: "Contacto",
    path: "/portphoto/contactphoto",
  },
];

const NavbarPhoto = ({ activeSection, setActiveSection }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Manejar navegación y cierre de menú
  const handleNavigation = (path) => {
    setActiveSection(path);
    setNavbarOpen(false);
  };

  // Detectar scroll para cambiar estilo del navbar
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

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  
  return (
    <div
      ref={navRef}
      className={`w-screen h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-[#0a0a0a]'
      }`}
    >
      <div className="flex justify-between items-center container mx-auto px-4 h-full">
        <Link href="/" className="h-[40px] relative group">
          <Image
            src="/images/logoWhite.svg"
            alt="LOGO"
            width={200}
            height={40}
            priority
            className="object-contain h-full transition-transform duration-300 group-hover:brightness-125"
          />
          {/* Línea decorativa estilo fotografía (blanco y negro) */}
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-gray-500 via-white to-gray-500 transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* Menú móvil */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded text-white hover:text-gray-300 border-white/20 hover:border-white/50 transition-all duration-300"
            >
              Menú
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-white/20 text-white hover:text-gray-300 transition-all duration-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-8">
          {navLinks
            .filter((link) => link.path !== activeSection)
            .map((link, index) => (
              <Link 
                key={index} 
                href={link.path}
                onClick={() => handleNavigation(link.path)}
                className="relative group px-3 py-2"
              >
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {link.title}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          navbarOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 backdrop-blur-md bg-black/80 border-t border-white/10">
          {navLinks
            .filter((link) => link.path !== activeSection)
            .map((link, index) => (
              <li key={index} className="w-4/5 md:w-full text-center">
                <Link 
                  href={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className="block text-gray-300 hover:text-white border border-transparent hover:border-white/20 transition-all duration-300 rounded-sm px-3 py-2"
                >
                  {link.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarPhoto;
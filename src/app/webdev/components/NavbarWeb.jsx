"use client";
import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    title: "Proyectos Web",
    path: "projects",
  },
  {
    title: "Contacto",
    path: "contacto",
  },
  {
    title: "Sobre mi",
    path: "about",
  },
];

const NavbarWeb = ({ activeSection, setActiveSection }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);

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
    <nav
      ref={navRef}
      aria-label="Navegación principal"
      className="w-full h-20 bg-[#0a1914] shadow-lg shadow-[#2ecc71]/10 fixed top-0 left-0 z-50 border-b border-[#2ecc71]/20"
    >
      <div className="flex justify-between items-center container mx-auto px-4 h-full">
        <Link href={"/"} className="h-[40px] relative group">
          <Image
            src="/images/logoWhite.svg"
            alt="José Angel Valdés - Portafolio"
            width={200}
            height={40}
            priority
            className="object-contain h-full transition-all duration-300 group-hover:brightness-125"
          />
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2ecc71] transition-all duration-300 group-hover:w-full"></div>
        </Link>
        
        {/* --- Botón hamburguesa / cerrar (móvil) --- */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={navbarOpen}
              aria-controls="mobile-menu-web"
              className="flex items-center px-3 py-2 border rounded text-[#2ecc71] hover:text-[#39e385] border-[#2ecc71]/30 hover:border-[#2ecc71]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Cerrar menú"
              aria-expanded={navbarOpen}
              aria-controls="mobile-menu-web"
              className="flex items-center px-3 py-2 border rounded border-[#2ecc71]/30 text-[#2ecc71] transition-colors hover:text-[#39e385] hover:border-[#2ecc71]"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* --- Navegación escritorio --- */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(link.path)}
                className={`transition-colors px-3 py-2 relative group ${
                  activeSection === link.path
                    ? "text-[#2ecc71]"
                    : "text-gray-300 hover:text-[#2ecc71]"
                }`}
              >
                {link.title}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-[#2ecc71] transition-all duration-300 ${
                    activeSection === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
        </div>
      </div>

      {/* --- Menú desplegable móvil --- */}
      <div
        id="mobile-menu-web"
        className={`md:hidden transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          navbarOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 bg-[#0a1914] border-t border-[#2ecc71]/20">
          {navLinks.map((link, index) => (
              <li key={index} className="w-full text-center">
                <button
                  onClick={() => {
                    setActiveSection(link.path);
                    setNavbarOpen(false);
                  }}
                  className={`w-full transition-colors px-3 py-2 ${
                    activeSection === link.path
                      ? "text-[#2ecc71] border-l-2 border-[#2ecc71]"
                      : "text-gray-300 hover:text-[#2ecc71] hover:bg-black/30"
                  }`}
                >
                  {link.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarWeb;
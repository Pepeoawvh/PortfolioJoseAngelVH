"use client";
import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePhoto } from "../context/PhotoContext";

const navLinks = [
  { title: "Sobre mí", path: "/portphoto/aboutphoto" },
  { title: "Contacto", path: "/portphoto/contactphoto" },
];

const seccionesNav = {
  fotolibros: "Fotolibros",
  proyectos: "Proyectos",
  materialEducativo: "Material Educativo",
};

const NavbarPhoto = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  const { activeSection, setActiveSection } = usePhoto();

  const handleSeccionChange = (seccion) => {
    setActiveSection((prev) => (prev === seccion ? null : seccion));
    setNavbarOpen(false);
  };

  const handleNavigation = () => {
    setNavbarOpen(false);
    setActiveSection(null);
  };

  // efecto scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // cerrar menú móvil y secciones al hacer click afuera
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const clickedInNavbar = navRef.current && navRef.current.contains(event.target);
      
      // Verificar si el click fue en el panel de contenido desplegable
      const dropdownPanel = document.querySelector('[data-dropdown-panel]');
      const clickedInPanel = dropdownPanel && dropdownPanel.contains(event.target);
      
      // Solo cerrar si el click NO fue en navbar NI en el panel
      if (!clickedInNavbar && !clickedInPanel) {
        setNavbarOpen(false);
        setActiveSection(null);
      }
    };
    
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setActiveSection]);

  // Botón de sección
  const Btn = ({ id, children }) => {
    const active = activeSection === id;

    const handleClick = () => {
      setActiveSection((prev) => (prev === id ? null : id));
    };

    return (
      <button
        type="button"
        role="tab"
        aria-selected={active}
        aria-controls={`panel-${id}`}
        onClick={handleClick}
        className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-300 group ${
          active
            ? "bg-[#FFB300]/20 text-white border border-[#FFB300]/60 shadow-[0_0_15px_-5px_rgba(255,179,0,0.4)]"
            : "bg-white/10 text-gray-300 border border-white/10 hover:border-[#FFB300]/40 hover:text-white"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFB300]/0 via-[#FFB300]/10 to-[#FFB300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span
          className={`text-sm md:text-md transition-colors duration-200 ${
            active ? "text-[#FFB300]" : "text-white group-hover:text-[#FFB300]"
          }`}
        >
          {children}
        </span>
        <div
          className={`h-0.5 w-0 bg-[#FFB300] transition-all duration-300 ${
            active ? "w-full" : "group-hover:w-full"
          }`}
        />
      </button>
    );
  };

  return (
    <div
      ref={navRef}
      className={`w-screen h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-black/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center container mx-auto px-4 h-full">
        {/* LOGO */}
        <Link href="/" className="h-[40px] relative group">
          <Image
            src="/images/logoWhite.svg"
            alt="LOGO"
            width={200}
            height={40}
            priority
            className="object-contain h-full transition-transform duration-300 group-hover:brightness-125"
          />
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-gray-500 via-white to-gray-500 transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden md:flex items-center space-x-6">
          <Btn id="fotolibros">Fotolibros</Btn>
          <Btn id="proyectos">Proyectos</Btn>
          <Btn id="experienciasEducativas">Experiencias Educativas</Btn>
        
          {/* Si NO estamos en /portphoto, mostramos el botón Galería */}
          {pathname !== "/portphoto" && (
            <Link
              href="/portphoto"
              onClick={handleNavigation}
              className="relative group px-3 py-2"
            >
              <span className="text-gray-300 transition-colors duration-300 group-hover:text-[#FFB300] text-sm font-medium">
                Galería
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFB300] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}

          {/* Los demás enlaces, excepto el activo */}
          {navLinks
            .filter((link) => link.path !== pathname)
            .map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={handleNavigation}
                className="relative group px-3 py-2"
              >
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white text-sm font-medium">
                  {link.title}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border border-[#FFB300] shadow-md shadow-[#FFB300]/20 rounded text-white hover:text-gray-300 border-white/20 hover:border-white/50 transition-all duration-300"
            >
              Menú
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-[#FFB300]/20 text-white hover:text-gray-300 transition-all duration-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`md:hidden transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          navbarOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 backdrop-blur-md bg-black/95 border-t border-white/10">
          {/* Secciones */}
          <div className="w-4/5 space-y-2 mb-4">
            {Object.entries(seccionesNav).map(([key, titulo]) => {
              const active = activeSection === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSeccionChange(key)}
                  className={`w-full text-center py-3 rounded-lg border transition-all duration-300 ${
                    active
                      ? "bg-[#FFB300]/20 text-white border-[#FFB300]/60"
                      : "bg-white/5 text-gray-300 border-white/10 hover:border-[#FFB300]/40"
                  }`}
                >
                  {titulo}
                </button>
              );
            })}
          </div>

          {/* Galería visible solo fuera de /portphoto */}
          {pathname !== "/portphoto" && (
            <li className="w-4/5 text-center">
              <Link
                href="/portphoto"
                onClick={handleNavigation}
                className="block text-gray-300 hover:text-[#FFB300] border border-[#FFB300]/20 hover:border-[#FFB300] transition-all duration-300 rounded-sm px-3 py-3"
              >
                Galería
              </Link>
            </li>
          )}

          {/* Links principales */}
          {navLinks
            .filter((link) => link.path !== pathname)
            .map((link, index) => (
              <li key={index} className="w-4/5 text-center">
                <Link
                  href={link.path}
                  onClick={handleNavigation}
                  className="block text-gray-300 hover:text-white border border-[#FFB300]/20 hover:border-[#FFB300] transition-all duration-300 rounded-sm px-3 py-3"
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
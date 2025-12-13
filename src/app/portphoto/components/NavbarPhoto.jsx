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

// ✅ FIX: ID UNIFICADO
const seccionesNav = {
  fotolibros: "Fotolibros",
  proyectos: "Proyectos",
  experienciasEducativas: "Experiencias Educativas",  // ← CAMBIADO de materialEducativo
};

const NavbarPhoto = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  const { activeSection, setActiveSection } = usePhoto();

  // ✅ FUNCIÓN UNIFICADA (desktop + mobile)
  const handleSeccionChange = (seccion) => {
    setActiveSection((prev) => (prev === seccion ? null : seccion));
    setNavbarOpen(false);
  };

  const handleNavigation = () => {
    setNavbarOpen(false);
    setActiveSection(null);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const clickedInNavbar = navRef.current && navRef.current.contains(event.target);
      const dropdownPanel = document.querySelector('[data-dropdown-panel]');
      const clickedInPanel = dropdownPanel && dropdownPanel.contains(event.target);
      
      if (!clickedInNavbar && !clickedInPanel) {
        setNavbarOpen(false);
        setActiveSection(null);
      }
    };
    
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setActiveSection]);

  // ✅ Btn ORIGINAL para DESKTOP (estilo sin cambios)
  const DesktopBtn = ({ id, children }) => {
    const active = activeSection === id;
    return (
      <button
        type="button"
        role="tab"
        aria-selected={active}
        aria-controls={`panel-${id}`}
        onClick={() => handleSeccionChange(id)}  // ✅ Usa función unificada
        className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-300 group ${
          active
            ? "bg-[#FFB300]/20 text-white border border-[#FFB300]/60 shadow-[0_0_15px_-5px_rgba(255,179,0,0.4)]"
            : "bg-white/10 text-gray-300 border border-white/10 hover:border-[#FFB300]/40 hover:text-white"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFB300]/0 via-[#FFB300]/10 to-[#FFB300]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`text-sm md:text-md transition-colors duration-200 ${active ? "text-[#FFB300]" : "text-white group-hover:text-[#FFB300]"}`}>
          {children}
        </span>
        <div className={`h-0.5 w-0 bg-[#FFB300] transition-all duration-300 ${active ? "w-full" : "group-hover:w-full"}`} />
      </button>
    );
  };

  // ✅ MobileBtn ORIGINAL (estilo sin cambios)
  const MobileBtn = ({ id, children }) => {
    const active = activeSection === id;
    return (
      <button
        key={id}
        onClick={() => handleSeccionChange(id)}  // ✅ Usa función unificada
        className={`w-full text-center py-3 rounded-lg border transition-all duration-300 ${
          active
            ? "bg-[#FFB300]/20 text-white border-[#FFB300]/60"
            : "bg-white/5 text-gray-300 border-white/10 hover:border-[#FFB300]/40"
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div ref={navRef} className={`w-screen h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-black/90 backdrop-blur-sm"}`}>
      <div className="flex justify-between items-center container mx-auto px-4 h-full">
        <Link href="/" className="h-[40px] relative group">
          <Image src="/images/logoWhite.svg" alt="LOGO" width={200} height={40} priority className="object-contain h-full transition-transform duration-300 group-hover:brightness-125" />
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-gray-500 via-white to-gray-500 transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* DESKTOP - ESTILO ORIGINAL */}
        <div className="hidden md:flex items-center space-x-6">
          <DesktopBtn id="fotolibros">Fotolibros</DesktopBtn>
          <DesktopBtn id="proyectos">Proyectos</DesktopBtn>
          <DesktopBtn id="experienciasEducativas">Experiencias Educativas</DesktopBtn>
          
          {pathname !== "/portphoto" && (
            <Link href="/portphoto" onClick={handleNavigation} className="relative group px-3 py-2">
              <span className="text-gray-300 transition-colors duration-300 group-hover:text-[#FFB300] text-sm font-medium">Galería</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFB300] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
          
          {navLinks.filter((link) => link.path !== pathname).map((link, index) => (
            <Link key={index} href={link.path} onClick={handleNavigation} className="relative group px-3 py-2">
              <span className="text-gray-300 transition-colors duration-300 group-hover:text-white text-sm font-medium">{link.title}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON - ESTILO ORIGINAL */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border border-[#FFB300] shadow-md shadow-[#FFB300]/20 rounded text-white hover:text-gray-300 border-white/20 hover:border-white/50 transition-all duration-300">
              Menú
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-[#FFB300]/20 text-white hover:text-gray-300 transition-all duration-300">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU - ESTILO ORIGINAL */}
      <div className={`md:hidden transition-[max-height] duration-500 ease-in-out overflow-hidden ${navbarOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 backdrop-blur-md bg-black/95 border-t border-white/10">
          <div className="w-4/5 space-y-2 mb-4">
            {Object.entries(seccionesNav).map(([key, titulo]) => (
              <MobileBtn key={key} id={key}>{titulo}</MobileBtn>  // ✅ Usa MobileBtn unificado
            ))}
          </div>

          {pathname !== "/portphoto" && (
            <li className="w-4/5 text-center">
              <Link href="/portphoto" onClick={handleNavigation} className="block text-gray-300 hover:text-[#FFB300] border border-[#FFB300]/20 hover:border-[#FFB300] transition-all duration-300 rounded-sm px-3 py-3">
                Galería
              </Link>
            </li>
          )}

          {navLinks.filter((link) => link.path !== pathname).map((link, index) => (
            <li key={index} className="w-4/5 text-center">
              <Link href={link.path} onClick={handleNavigation} className="block text-gray-300 hover:text-white border border-[#FFB300]/20 hover:border-[#FFB300] transition-all duration-300 rounded-sm px-3 py-3">
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

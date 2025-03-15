"use client";
import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    
  },
  {
    title: "Sobre mi",
    path: "/portphoto/aboutphoto",
  },
  {
    title: "Contacto",
    path: "/portphoto/contactphoto",
  },
];

const NavbarWeb = ({ activeSection, setActiveSection }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);

  // Esta función manejará tanto la navegación como el cierre del menú
  const handleNavigation = (path) => {
    setActiveSection(path);
    setNavbarOpen(false);
  };

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
      className="w-screen h-20 bg-[#20202a] shadow-md fixed top-0 left-0 z-50"
    >
      <div className="flex justify-between text-[#FFB300] items-center container mx-auto px-4 h-full ">
        <Link href="/" className="h-[40px]">
          <Image
            src="/images/logoWhite.svg"
            alt="LOGO"
            width={200}
            height={40}
            priority
            className="object-contain h-full"
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center  px-3 py-2 border rounded text-[#FFB300] hover:text-[#f7d78d] border-slate-200 hover:border-white"
            >
              Menú
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-[#FFB300] transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
              </button>
          )}
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks
            .filter((link) => link.path !== activeSection)
            .map((link, index) => (
              <Link 
                key={index} 
                href={link.path}
                onClick={() => handleNavigation(link.path)}
                className="hover:bg-[#FFB300] hover:text-white text-shadow-md transition-colors rounded px-3 py-2"
              >
                {link.title}
              </Link>
            ))}
        </div>
      </div>

      <div
        className={`md:hidden transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          navbarOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 bg-[#20202a]">
          {navLinks
            .filter((link) => link.path !== activeSection)
            .map((link, index) => (
              <li key={index} className="w-4/5 md:w-full text-center">
                <Link 
                  href={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className="block hover:bg-[#FFB300] text-[#FFB300] hover:text-white text-shadow-md transition-colors rounded-full px-3 py-2"
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

export default NavbarWeb;
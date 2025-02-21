"use client";
import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
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
    <div
      ref={navRef}
      className="w-screen h-20 bg-[#20202a] shadow-md fixed top-0 left-0 z-50"
    >
      <div className="flex justify-between items-center container mx-auto px-4 h-full">
        <Link href={"/"} className="h-[40px]">
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
              className="flex items-center px-3 py-2 border rounded text-primary-500 hover:text-primary-300 border-slate-200 hover:border-white"
            >
              Menú
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-primary-500 transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks
            .filter((link) => link.path !== activeSection)
            .map((link, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(link.path)}
                className="hover:bg-primary-600 transition-colors rounded-full px-3 py-2"
              >
                {link.title}
              </button>
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
              <li key={index}>
                <button
                  onClick={() => {
                    setActiveSection(link.path);
                    setNavbarOpen(false);
                  }}
                  className="hover:bg-primary-600 transition-colors rounded-full px-3 py-2"
                >
                  {link.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarWeb;
"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
  {
    title: "Proyectos",
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

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={`  animate-fade-down fixed mx-auto top-0 left-0  right-0 bg-[#20202a] bg-opacity-100 z-50 shadow-md`}
    >
      <div className="grid grid-cols-2  container lg:py-1 items-center mx-auto px-4 my-2  z-[100]">
        <Link href={"/"} className="animate-fade-downjustify-self-center auto">
          {" "}
          <Image
            src="/images/logoWhite.svg"
            alt="LOGO"
            className="fill-white animate-fade-down"
            layout=""
            width={250}
            height={100}
          />
        </Link>
        <div className="mobile-menu block md:hidden justify-self-end animate-fade-down">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex  items-center animate-fade-down px-3 py-2 border rounded border-slate-200 text-white hover:text-primary-100 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5 animate-fade-right animate-once" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 animate-fade-down border rounded border-slate-200 text-white  hover:text-primary-600 transition-colors"
            >
              <XMarkIcon className="h-5 w-5 animate-spin animate-once" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="grid grid-cols-3 bx p-4 md:p-0 md:flex-row animate-fade-down md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="grid justify-items-center hover:bg-primary-600 transition-colors rounded-full  animate-fade-down"
              >
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

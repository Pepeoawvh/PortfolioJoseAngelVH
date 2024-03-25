"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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
    <nav className=" fixed mx-auto top-0 left-0 right-0 bg-[#20202a] bg-opacity-100 z-50">
      <div className="grid grid-cols-2  container lg:py-1 items-center mx-auto px-4 py-2 ">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl font-semibold w-20 h-20 overflow-hidden justify-self-center rounded-full"
        >
          {" "}
          <Image
            src="/images/photos/ProfileGreen.jpg"
            alt="hero image"
            className="object-fit w-full"
            layout=""
            width={80}
            height={80}
          />
        </Link>
        <div className="mobile-menu block md:hidden justify-self-end">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-primary-100 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white  hover:text-primary-600 transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="grid grid-cols-3 bx p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="grid justify-items-center hover:bg-primary-900 transition-colors rounded-full "
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

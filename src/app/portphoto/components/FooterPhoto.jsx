import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBehance,
  faWhatsapp,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";

const FooterPhoto = () => {
  return (
    <footer className="bg-[#0a0a0a] select-none text-white pb-4  pt-2 border-t border-white/10 shadow-inner">
      <div className="container mx-auto px-4">
        {/* Contenedor de iconos sociales */}
        <div className="flex justify-center space-x-6">
          <SocialIcon 
            href="https://www.instagram.com/joseangel.vh" 
            icon={faInstagram} 
            label="Instagram"
          />
          <SocialIcon 
            href="https://www.behance.net/ljpp" 
            icon={faBehance} 
            label="Behance - Proyectos de Autor"
          />
          <SocialIcon
            href="https://flickr.com/photos/elpp/albums"
            icon={faFlickr}
            label="Flickr - Galería Comercial"
          />
          <SocialIcon 
            href="https://wa.me/56949866129" 
            icon={faWhatsapp} 
            label="WhatsApp"
          />
        </div>
        
        {/* Línea decorativa monocromática */}
        <div className="flex justify-center my-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#FFB300]/40 to-transparent"></div>
        </div>
        
        {/* Copyright */} 
        <div className="text-center text-xs text-gray-400 mt-2">
          &copy; {new Date().getFullYear()} José Angel Valdés Hernández | <span className="text-white">Fotografía Profesional</span>
        </div>
      </div>
    </footer>
  );
};

// Componente para los iconos sociales
const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
    aria-label={label}
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black border border-transparent transition-all duration-300 group-hover:border-white/30 group-hover:bg-black/60">
      <FontAwesomeIcon
        icon={icon}
        className="h-5 text-gray-300 transition-all duration-300 group-hover:text-white group-hover:scale-110"
      />
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5 blur-sm"></span>
    </div>
    
    {/* Tooltip */}
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-[#FFB300] rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-white/20">
      {label}
    </span>
  </a>
);

export default FooterPhoto;
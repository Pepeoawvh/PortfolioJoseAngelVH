import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterWeb = () => {
  return (
    <footer className="bg-[#0a1914] text-white py-6 border-t border-[#2ecc71]/10 shadow-inner">
      <div className="container mx-auto px-4">
        {/* Contenedor de iconos sociales */}
        <div className="flex justify-center space-x-8">
          <SocialIcon 
            href="https://github.com/Pepeoawvh" 
            icon={faGithub} 
            label="GitHub"
          />
          <SocialIcon 
            href="https://www.linkedin.com/in/jose-angel-valdes-hernandez/" 
            icon={faLinkedin} 
            label="LinkedIn"
          />
          <SocialIcon 
            href="https://wa.me/56949866129" 
            icon={faWhatsapp} 
            label="WhatsApp"
          />
        </div>
        
        {/* Línea decorativa con gradiente */}
        <div className="flex justify-center my-4">
          <div className="h-px w-32 bg-gradient-to-r from-[#d63384]/10 via-[#2ecc71]/30 to-[#d63384]/10"></div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-2">
          &copy; {new Date().getFullYear()} José Angel Valdés Hernández | <span className="text-[#2ecc71]">Desarrollo Web</span>
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
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-transparent transition-all duration-300 group-hover:border-[#2ecc71]/30 group-hover:bg-black/60">
      <FontAwesomeIcon
        icon={icon}
        className="h-5 text-gray-300 transition-all duration-300 group-hover:text-[#2ecc71] group-hover:scale-110"
      />
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#2ecc71]/5 blur-sm"></span>
    </div>
    
    {/* Tooltip */}
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-[#2ecc71] rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-[#2ecc71]/20">
      {label}
    </span>
  </a>
);

export default FooterWeb;
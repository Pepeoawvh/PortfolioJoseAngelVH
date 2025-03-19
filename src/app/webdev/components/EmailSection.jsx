"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const EmailSection = () => {
  return (
    <section id="contact" className="animate-fade animate-delay-200 bg-[#0a1914]">
      {/* Cabecera con título */}
      <div className="pb-8 pt-8">
        <h2 className="text-4xl font-bold mb-2 text-center">
          <span className="text-[#2ecc71]">Contactame </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#d63384]/10 via-[#2ecc71] to-[#d63384]/10 mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 px-8 md:px-12 lg:px-20 pb-20">
        {/* Columna izquierda: Información de contacto */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-4">Conversemos</h3>
          
          <div className="bg-black/20 border border-[#2ecc71]/10 rounded-lg p-6 shadow-inner mb-6 relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 text-[#2ecc71]/5">
              <FontAwesomeIcon icon={faWhatsapp} className="w-full h-full" />
            </div>
            
            <p className="text-gray-300 mb-6 relative z-10">
              Me encantaría participar en proyectos novedosos con equipos creativos y
              comprometidos. ¡Hablemos! Tengo experiencia en el área de las artes
              visuales, fotografía y diseño, desde donde puedo aportar con un enfoque
              diferente a distintos grupos de trabajo.
            </p>
            
            <p className="text-gray-300 relative z-10">
              El método más rápido para contactarme es a través de WhatsApp.
              También puedes encontrarme en mis redes sociales que encontrarás en la parte inferior de la página.
            </p>
          </div>
        </div>
        
        {/* Columna derecha: Botón de WhatsApp */}
        <div className="flex flex-col justify-center items-center">
          <div className="relative group max-w-sm w-full">
            {/* Efecto de aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2ecc71]/30 to-[#d63384]/10 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            
            {/* Botón */}
            <a 
              href="https://wa.me/56949866129?text=Hola,%20te%20contacto%20desde%20tu%20portfolio%20web." 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex flex-col items-center justify-center bg-[#0f2c1b] border border-[#2ecc71]/30 rounded-lg p-8 transition-all duration-300 hover:border-[#2ecc71]/50 hover:shadow-lg hover:shadow-[#2ecc71]/20"
            >
              {/* Ícono de WhatsApp */}
              <div className="relative mb-4">
                <FontAwesomeIcon 
                  icon={faWhatsapp} 
                  className="h-24 w-24 text-[#2ecc71] transition-all duration-500 group-hover:scale-110" 
                />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#2ecc71]/10 blur-md"></span>
              </div>
              
              {/* Texto del botón */}
              <h4 className="text-xl font-bold text-white mb-2">Contáctame por WhatsApp</h4>
              <p className="text-gray-400 text-sm text-center mb-2">Suelo responder rápidamente</p>
              
              {/* Número de teléfono */}
              <span className="text-lg font-mono text-[#2ecc71] mt-2">+56 9 4986 6129</span>
              
              {/* Mensaje de call-to-action */}
              <span className="mt-4 px-6 py-2 bg-black/30 rounded-full text-sm text-white transition-all duration-300 group-hover:bg-[#2ecc71]/20">
                Presiona para enviar un mensaje
              </span>
            </a>
          </div>
          
          {/* Nota adicional */}
          <p className="text-gray-400 text-center text-xs mt-6 max-w-sm">
            También puedes revisar mis credenciales en <span className="text-[#d63384]">LinkedIn</span> o ver mi repositorio de código en <span className="text-[#2ecc71]">GitHub</span> a través de los enlaces en el pie de página.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
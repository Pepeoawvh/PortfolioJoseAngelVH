"use client";
import React from "react";
import Link from "next/link";

const FormPhoto = () => {
  // Número de WhatsApp con código de país
  const whatsappNumber = "569XXXXXXXX"; // Ejemplo: 569XXXXXXXX para Chile
  
  // Mensaje predeterminado codificado para URL
  const defaultMessage = encodeURIComponent("Hola José, me interesa conocer más sobre tus servicios fotográficos.");
  
  // URL de WhatsApp con número y mensaje
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="space-y-8 py-6">
      {/* Encabezado de contacto */}
      <div className="text-center mb-10">
        <p className="text-gray-300 max-w-2xl mx-auto">
          Para una comunicación más rápida y eficiente, ahora puedes contactarme directamente a través de WhatsApp. Responderé a tu mensaje tan pronto como sea posible.
        </p>
      </div>
      
      {/* Botón de WhatsApp */}
      <div className="flex justify-center">
        <Link 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-black border border-[#FFB300] rounded-md py-5 px-8 transition-all duration-500 hover:bg-[#0a0a0a] hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,179,0,0.15)] flex items-center justify-center"
        >
          {/* Efecto de luz */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFB300]/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
          
          {/* Icono de WhatsApp */}
          <svg 
  xmlns="http://www.w3.org/2000/svg" 
  className="h-7 w-7 mr-4 text-white transition-all duration-300 group-hover:text-[#FFB300] group-hover:scale-110" 
  fill="currentColor" 
  viewBox="0 0 24 24"
>
  {/* Símbolo interior de WhatsApp (teléfono) */}
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
  
  {/* Círculo exterior con borde más delgado */}
  <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"></path>
</svg>
          
          {/* Texto del botón */}
          <div className="flex select-none flex-col items-start">
            <span className="text-lg font-medium text-white tracking-wide group-hover:text-[#FFB300] transition-colors duration-300">Contáctame por WhatsApp</span>
            <span className="text-xs text-gray-300 font-light group-hover:text-white transition-colors duration-300">Suelo responder rápidamente</span>
          </div>
        </Link>
      </div>
      
      {/* Información adicional */}
      <div className="mt-10 text-center">
        <p className="text-gray-400 text-sm">
          También puedes enviarme un correo a{" "}
          <a href="mailto:jpp@gmail.com" className="text-[#FFB300] hover:text-white transition-colors duration-300">
            jpp.valdés@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormPhoto;
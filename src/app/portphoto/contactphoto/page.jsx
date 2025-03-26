"use client";
import React from "react";
import { sourceSansPro } from "../../ui/fonts";
import FormPhoto from "../components/FormPhoto";
import Image from "next/image";

const ContactPhoto = () => {
  return (
    <div className={`flex  flex-col min-h-screen bg-[#0a0a0a] ${sourceSansPro.className}`}>
      <header className="relative grid grid-cols-1 md:grid-cols-2 items-center py-10 mt-20">
        {/* Fondo con efecto de viñeta */}
        <div className="absolute inset-0 bg-black shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] z-0"></div>
        
        {/* Contenido del encabezado */}
        <div className="relative z-10 px-6 py-6 md:py-10 flex flex-col items-center md:items-end">
          <div className="md:text-right text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">Contacto</h1>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#FFB300] to-transparent md:ml-auto mx-auto md:mx-0 mb-3"></div>
            <p className="text-lg text-[#FFB300] font-light tracking-wide">¡Conversemos sobre tu proyecto!</p>
          </div>
        </div>
        
        <section className="relative z-10 text-center px-6 md:px-10 py-6">
          <p className="text-gray-300 leading-relaxed max-w-lg">
            Estoy disponible para colaborar en proyectos fotográficos, 
            tanto comerciales como artísticos.
          </p>
        </section>
      </header>

      <main className="flex-grow bg-[#0a0a0a]">
        <section className="px-4 md:px-12 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8">
              {/* Formulario de contacto */}
              <div className="bg-black/50 rounded-md border border-white/10 shadow-lg p-6">
                <h2 className="text-xl font-medium text-white mb-4 flex items-center">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#FFB300] mr-3"></span>
                  Contacto Directo
                </h2>
                <FormPhoto />
              </div>

              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="bg-black/50 rounded-md border border-white/10 p-6">
                  <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFB300] mr-3"></span>
                    Horario de Atención
                  </h2>
                  <ul className="space-y-2 text-gray-300 pl-5">
                    <li className="flex items-start">
                      <span className="inline-block h-1 w-1 bg-white rounded-full mt-2 mr-2"></span>
                      <span>Lunes a Viernes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1 w-1 bg-white rounded-full mt-2 mr-2"></span>
                      <span>9:00 - 18:00 hrs</span>
                    </li>
                    <li className="text-[#FFB300]/80 mt-4 text-sm italic">
                      * Disponibilidad flexible para sesiones fotográficas
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-md border border-white/10 p-6">
                  <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFB300] mr-3"></span>
                    Ubicación
                  </h2>
                  <p className="text-gray-300">Valparaíso, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección inferior con información adicional */}
        <section className="bg-black border-t border-white/10 px-4 md:px-12 py-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-medium text-white mb-8">
              <span className="inline-block h-px w-10 bg-[#FFB300] mr-3 align-middle"></span>
              ¿Por qué trabajar conmigo?
              <span className="inline-block h-px w-10 bg-[#FFB300] ml-3 align-middle"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/30 border border-white/5 rounded-md p-6 hover:border-[#FFB300]/30 transition-all duration-300">
                <h3 className="text-[#FFB300] font-medium mb-3">Experiencia</h3>
                <p className="text-gray-300">
                  Más de 12 años dedicados a la fotografía profesional y artística
                </p>
              </div>
              <div className="bg-black/30 border border-white/5 rounded-md p-6 hover:border-[#FFB300]/30 transition-all duration-300">
                <h3 className="text-[#FFB300] font-medium mb-3">Personalización</h3>
                <p className="text-gray-300">
                  Cada proyecto se adapta meticulosamente a tus necesidades específicas
                </p>
              </div>
              <div className="bg-black/30 border border-white/5 rounded-md p-6 hover:border-[#FFB300]/30 transition-all duration-300">
                <h3 className="text-[#FFB300] font-medium mb-3">Calidad</h3>
                <p className="text-gray-300">
                  Compromiso con la excelencia técnica y artística en cada imagen
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPhoto;
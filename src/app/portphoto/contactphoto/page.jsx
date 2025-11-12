"use client";
import React from "react";
import { sourceSansPro } from "../../ui/fonts";
import FormPhoto from "../components/FormPhoto";

const ContactPhoto = () => {
  return (
    <div
      className={`flex flex-col min-h-screen bg-[#0a0a0a] ${sourceSansPro.className}`}
    >
      {/* HEADER */}
      <header className="relative grid grid-cols-1 md:grid-cols-2 items-center py-12 md:py-16  border-b border-white/10 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="absolute inset-0 bg-black/60 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-0"></div>

        {/* Título */}
        <div className="relative z-10 px-8 md:px-16 flex flex-col items-center md:items-end">
          <div className="md:text-right text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-wide">
              Contacto
            </h1>
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#FFB300] to-transparent md:ml-auto mx-auto md:mx-0 mb-3"></div>
            <p className="text-lg text-[#FFB300]/90 font-light tracking-wide">
              ¡Conversemos sobre tu proyecto!
            </p>
          </div>
        </div>

        {/* Descripción */}
        <section className="relative z-10 text-center px-8 md:px-12">
          <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">
            Estoy disponible para colaborar en proyectos fotográficos tanto
            comerciales como artísticos.
          </p>
        </section>
      </header>

      {/* MAIN */}
      <main className="flex-grow bg-[#0a0a0a]">
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-10">
              {/* Formulario */}
              <div className="bg-[#0d0d0d] rounded-lg border border-white/10 shadow-lg p-8 hover:border-[#FFB300]/20 transition">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="h-3 w-3 rounded-full bg-[#FFB300] mr-3"></span>
                  Envíame un mensaje
                </h2>
                <FormPhoto />
              </div>

              {/* Info lateral */}
              <div className="space-y-8">
                <div className="bg-[#0d0d0d] rounded-lg border border-white/10 p-6">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFB300] mr-3"></span>
                    Horario de atención
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Lunes a Viernes: 9:00 - 18:00 hrs</li>
                    <li className="text-[#FFB300]/70 text-sm italic mt-3">
                      * Disponibilidad flexible para sesiones fotográficas
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0d0d0d] rounded-lg border border-white/10 p-6">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFB300] mr-3"></span>
                    Ubicación
                  </h3>
                  <p className="text-gray-300">Valparaíso, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección inferior */}
        <section className="bg-black/70 border-t border-white/10 px-6 md:px-12 py-14 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-10">
              <span className="inline-block h-px w-10 bg-[#FFB300] mr-3 align-middle"></span>
              ¿Por qué trabajar conmigo?
              <span className="inline-block h-px w-10 bg-[#FFB300] ml-3 align-middle"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Experiencia",
                  text: "Más de 12 años dedicados a la fotografía profesional y artística.",
                },
                {
                  title: "Personalización",
                  text: "Cada proyecto se adapta meticulosamente a tus necesidades.",
                },
                {
                  title: "Calidad",
                  text: "Compromiso con la excelencia técnica y artística en cada imagen.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0d0d0d] border border-white/10 rounded-lg p-8 hover:border-[#FFB300]/30 transition"
                >
                  <h3 className="text-[#FFB300] font-medium mb-3 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPhoto;

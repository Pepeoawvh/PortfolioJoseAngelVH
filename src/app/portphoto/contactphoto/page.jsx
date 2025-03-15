"use client";
import React from "react";
import { sourceSansPro } from "../../ui/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import FormPhoto from "../components/FormPhoto";

const ContactPhoto = () => {
  return (
    <div className={`flex flex-col min-h-screen ${sourceSansPro.className}`}>
      <header className="grid grid-cols-1 md:grid-cols-[0.71fr,1fr] items-center text-center py-6 mt-20 bg-gray-800 text-white">
        <div className="gap-4 items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Contacto</h1>
          <p className="text-lg text-[#FFB300]">¡Conversemos sobre tu proyecto!</p>
        </div>
        <section className="text-center px-4 md:px-12 py-6">
          <p className="text-sm mx-auto text-left">
            Estoy disponible para colaborar en proyectos fotográficos, 
            tanto comerciales como artísticos. Contáctame para discutir 
            tus ideas.
          </p>
        </section>
      </header>

      <main className="flex-grow">
        <section className="px-4 md:px-12 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8">
              {/* Formulario de contacto */}
              <div className="bg-[#20202a] rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-white mb-6">
                  Formulario de Contacto
                </h2>
                <FormPhoto />
              </div>

              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="bg-[#20202a] rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Contacto Directo
                  </h2>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/56949866129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="bg-[#20202a] rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Horario de Atención
                  </h2>
                  <ul className="space-y-2 text-gray-300">
                    <li>Lunes a Viernes</li>
                    <li>9:00 - 18:00 hrs</li>
                    <li className="text-[#FFB300] mt-4">
                      * Disponibilidad flexible para sesiones fotográficas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección inferior con información adicional */}
        <section className="bg-gray-800 px-4 md:px-12 py-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">¿Por qué trabajar conmigo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <h3 className="text-[#FFB300] font-semibold mb-2">Experiencia</h3>
                <p className="text-sm">
                  Más de 12 años dedicados a la fotografía
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-[#FFB300] font-semibold mb-2">Personalización</h3>
                <p className="text-sm">
                  Cada proyecto se adapta a tus necesidades específicas
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-[#FFB300] font-semibold mb-2">Calidad</h3>
                <p className="text-sm">
                  Compromiso con la excelencia en cada imagen
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
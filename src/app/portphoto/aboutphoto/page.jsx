"use client";
import React, { useState, useEffect } from "react";
import { sourceSansPro } from "../../ui/fonts";
import HeaderPhoto from "../components/HeaderAbout";
import MobileSectionsPhoto from "../components/MobileSectionsPhoto";
import DesktopSectionsPhoto from "../components/AboutPhoto";
import Image from "next/image";
import Link from "next/link";

const AboutPhoto = () => {
  const [seccionActiva, setSeccionActiva] = useState("perfil");
  const [seccionesAbiertas, setSeccionesAbiertas] = useState({});
  const [esMobil, setEsMobil] = useState(false);

  // Detectar si es dispositivo móvil al cargar y al cambiar tamaño
  useEffect(() => {
    const verificarTamanio = () => {
      setEsMobil(window.innerWidth < 768);
    };
    verificarTamanio();
    window.addEventListener("resize", verificarTamanio);
    return () => window.removeEventListener("resize", verificarTamanio);
  }, []);

  const toggleSeccion = (seccion) => {
    if (esMobil) {
      setSeccionesAbiertas((prev) => ({
        ...prev,
        [seccion]: !prev[seccion],
      }));
    } else {
      setSeccionActiva(seccion);
    }
  };

  const secciones = {
    perfil: {
      titulo: "Perfíl Profesional",
      subtitulo: "Fotógrafo Profesional y Artista Visual",
      contenido: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Fotógrafo profesional titulado del Instituto Profesional Arcos (2017) con más de 12 años de experiencia en distintos géneros fotográficos. Mi trabajo se caracteriza por una búsqueda constante, especialmente en técnicas de larga exposición con láser y fotografía de paisaje.
          </p>
          <p className="text-gray-300">
            Intento combinar mi formación técnica con reflexiones sobre el rol de la imagen y la fotografía en la era digital.
          </p>
        </div>
      ),
    },
    especializacion: {
      titulo: "Especialización",
      subtitulo: "Áreas de expertise",
      contenido: (
        <div className="space-y-2   ">
          <div className="flex items-start bg-black/30 p-4 rounded-md border border-white/5 hover:border-white/20 transition-all duration-300">
            <Image
              src="/images/icons/LEicon.png"
              alt="Icono de Larga Exposición"
              width={80}
              height={80}
              className="mr-4 opacity-90"
            />
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Fotografía de Larga Exposición y Light Painting</h3>
              <p className="text-gray-300">
                He desarrollado una técnica personal de larga exposición utilizando láser de alta energía para &quot;dibujar&quot; sobre las escenas capturadas, con post-producción selectiva para transformar tonalidades.
              </p>
            </div>
          </div>
          <div className="flex items-start bg-black/30 p-4 rounded-md border border-white/5 hover:border-white/20 transition-all duration-300">
            <Image
              src="/images/icons/LAicon.png"
              alt="Icono de Paisaje"
              width={80}
              height={80}
              className="mr-4 opacity-90"
            />
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Fotografía de Paisaje</h3>
              <p className="text-gray-300">
                Especializado en capturar la sublimidad de paisajes naturales, con particular atención a escenas montañosas con efectos de niebla y profundidad atmosférica.
              </p>
            </div>
          </div>
          <div className="flex items-start bg-black/30 p-4 rounded-md border border-white/5 hover:border-white/20 transition-all duration-300">
            <Image
              src="/images/icons/360icon.png"
              alt="Icono de Arquitectónica"
              width={80}
              height={80}
              className="mr-4 opacity-90"
            />
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Fotografía 360° y Arquitectónica</h3>
              <p className="text-gray-300">
                Ofrezco servicios de documentación arquitectónica mediante tecnología 360° para recorridos virtuales inmersivos de inmuebles, museos y espacios educativos.
              </p>
            </div>
          </div>
          <div className="flex items-start bg-black/30 p-4 rounded-md border border-white/5 hover:border-white/20 transition-all duration-300">
            <Image
              src="/images/icons/psicon.png"
              alt="Icono de PostProducción"
              width={80}
              height={80}
              className="mr-4 opacity-90"
            />
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">PostProducción Digital</h3>
              <p className="text-gray-300">
                Amplia experiencia y dominio de software de edición de imágenes como Adobe Lightroom y Photoshop, con habilidades avanzadas en retoque y manipulación de imágenes. Además de nociones avanzadas de Diseño gráfico y diagramación. Conocimientos de impresión digital y offset.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    
    filosofia: {
      titulo: "Filosofía Fotográfica",
      subtitulo: "Mi visión creativa",
      contenido: (
        <div className="space-y-4 text-gray-300">
          <p>
            Entiendo la fotografía como una afirmación de existencia, un medio para documentar y expresar la presencia de lo que hay en este universo aunque sea de manera efímera. A través de mis imágenes, busco dialogar con la luz —aspecto fundamental que no solo permite ver, sino también existir.
          </p>
          <blockquote className="italic border-l-4 border-[#FFB300] pl-4 my-6 py-2 bg-black/30 text-white">
            &quot;Somos gracias a la luz y es ella misma quien nos permite afirmar su existencia, y por lo tanto, la nuestra.&quot;
          </blockquote>
          <p>
            Esta visión conceptual sustenta mis proyectos personales, mientras que en mi trabajo comercial me enfoco en la excelencia técnica y la satisfacción de requisitos de mis clientes.
          </p>
        </div>
      ),
    },
    servicios: {
      titulo: "Servicios Profesionales",
      subtitulo: "Lo que puedo ofrecer",
      contenido: (
        <div className="bg-black/30 p-5 rounded-md border border-white/5">
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300] mr-3"></span>
              Fotografía arquitectónica y recorridos virtuales 360°
            </li>
            <li className="flex items-center text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300] mr-3"></span>
              Fotografía de paisaje y naturaleza
            </li>
            <li className="flex items-center text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300] mr-3"></span>
              Retratos artísticos
            </li>
            <li className="flex items-center text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300] mr-3"></span>
              Fotografía de interiores y exteriores (jardines, espacios residenciales)
            </li>
            <li className="flex items-center text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300] mr-3"></span>
              Proyectos fotográficos conceptuales y de autor
            </li>
            <li className="flex items-center text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300] mr-3"></span>
              Talleres y clases de Fotografía
            </li>
          </ul>
        </div>
      ),
    },
  };

  return (
    <div className={`flex flex-col min-h-screen  bg-[#0a0a0a] ${sourceSansPro.className}`}>
      <HeaderPhoto />
      <main className="flex-grow">
        {esMobil ? (
          <section className="px-4 py-4">
            <MobileSectionsPhoto secciones={secciones} seccionesAbiertas={seccionesAbiertas} toggleSeccion={toggleSeccion} />
          </section>
        ) : (
          <DesktopSectionsPhoto secciones={secciones} seccionActiva={seccionActiva} setSeccionActiva={setSeccionActiva} />
        )}
      </main>
    </div>
  );
};

export default AboutPhoto;
"use client";
import React, { useState, useEffect } from "react";
import { sourceSansPro } from "../../ui/fonts";
import HeaderPhoto from "../../components/HeaderPhoto";
import MobileSectionsPhoto from "../../components/MobileSectionsPhoto";
import DesktopSectionsPhoto from "../../components/DesktopSectionsPhoto";
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
          <p>
            Fotógrafo profesional titulado del Instituto Profesional Arcos (2017) con más de 12 años de experiencia en distintos géneros fotográficos. Mi trabajo se caracteriza por una búsqueda constante, especialmente en técnicas de larga exposición con láser y fotografía de paisaje.
          </p>
          <p>
            Intento combinar mi formación técnica con reflexiónes sobre el rol de la imagen y la fotografía en la era digital.
          </p>
        </div>
      ),
    },
especializacion: {
  titulo: "Especialización",
  subtitulo: "Áreas de expertise",
  contenido: (
    <div className="space-y-4">
      <div className="flex items-start">
        <Image
          src="/images/icons/LEicon.png"
          alt="Icono de Larga Exposición"
          width={100}
          height={100}
          className="mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">Fotografía de Larga Exposición y Light Painting</h3>
          <p>
            He desarrollado una técnica personal de larga exposición utilizando láser de alta energía para &quot;dibujar&quot; sobre las escenas capturadas, con post-producción selectiva para transformar tonalidades.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <Image
          src="/images/icons/LAicon.png"
          alt="Icono de Paisaje"
          width={100}
          height={100}
          className="mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">Fotografía de Paisaje</h3>
          <p>
            Especializado en capturar la sublimidad de paisajes naturales, con particular atención a escenas montañosas con efectos de niebla y profundidad atmosférica.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <Image
          src="/images/icons/360icon.png"
          alt="Icono de Arquitectónica"
          width={100}
          height={100}
          className="mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">Fotografía 360° y Arquitectónica</h3>
          <p>
            Ofrezco servicios de documentación arquitectónica mediante tecnología 360° para recorridos virtuales inmersivos de inmuebles, museos y espacios educativos.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <Image
          src="/images/icons/psicon.png"
          alt="Icono de PostProducción"
          width={100}
          height={100}
          className="mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">PostProducción Digital</h3>
          <p>
            Amplia experiencia y dominio de software de edición de imágenes como Adobe Lightroom y Photoshop, con habilidades avanzadas en retoque y manipulación de imágenes. Además de nociones avanzadas de Diseño gráfico y diagramación. Conocimientos de impresión digital y offset.
          </p>
        </div>
      </div>
    </div>
  ),
},
    proyectos: {
      titulo: "Proyectos Destacados",
      subtitulo: "Mi obra personal",
      contenido: (
        <div className="space-y-4" id="proyectos-destacados">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 items-center">
            <Image
              src="/images/projects/LCDLP.jpg"
              alt="La Caza de las Pantallas"
              width={3000}
              height={3000}
              className="h-28 w-auto rounded-md"
            />
            <div>
              <h3 className="font-semibold text-lg">La Caza de las Pantallas</h3>
              <p>
                Ensayo visual y reflexivo sobre la evolución del rol de la fotografía en la era digital. Este proyecto resultó en un fotolibro que funciona como comentario crítico sobre nuestra relación con las imágenes y pantallas. <Link href="https://www.behance.net/gallery/215597665/La-caza-de-las-Pantallas" className="text-[#FFB300] hover:text-yellow-400">Ver en Behance</Link>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 items-center">
            <Image
              src="/images/projects/despliegueluz.jpg"
              alt="Despliegue de la Luz"
              width={3000}
              height={3000}
              className="h-28 w-auto rounded-md"
            />
            <div>
              <h3 className="font-semibold text-lg">Despliegue de la Luz</h3>
              <p>
                Fotolibro que explora el espectro visible a través de una aproximación tanto física como poética a la luz. Un recorrido visual por los colores y sus manifestaciones en diferentes contextos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 items-center">
            <Image
              src="/images/projects/stalkerph.jpg"
              alt="Stalker.ph"
              width={3000}
              height={3000}
              className="h-28 w-auto rounded-md"
            />
            <div>
              <h3 className="font-semibold text-lg">Stalker.ph</h3>
              <p>
                Proyecto transmedia que combina fotografía de juegos (screenshots) con narrativa personal. Incluye componente de redes sociales con una comunidad activa de seguidores.
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
        <div className="space-y-4">
          <p>
            Entiendo la fotografía como una afirmación de existencia, un medio para documentar y expresar la presencia de lo que hay en este universo aunque sea de manera efimera. A través de mis imágenes, busco dialogar con la luz —aspecto fundamental que no solo permite ver, sino también ser existir.
          </p>
          <blockquote className="italic border-l-4 border-[#FFB300] pl-4 my-4">
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
        <ul className="list-disc pl-5 space-y-2">
          <li>Fotografía arquitectónica y recorridos virtuales 360°</li>
          <li>Fotografía de paisaje y naturaleza</li>
          <li>Retratos artísticos</li>
          <li>Fotografía de interiores y exteriores (jardines, espacios residenciales)</li>
          <li>Proyectos fotográficos conceptuales y de autor</li>
          <li>Talleres y clases de Fotografía</li>
        </ul>
      ),
    },
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gray-900 ${sourceSansPro.className}`}>
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
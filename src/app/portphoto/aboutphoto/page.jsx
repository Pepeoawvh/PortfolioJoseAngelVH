'use client'
import React from "react";
import { sourceSansPro } from "../../ui/fonts";
import HeaderPhoto from "../components/HeaderAbout";
import MobileSectionsPhoto from "../components/MobileSectionsPhoto";
import DesktopSectionsPhoto from "../components/AboutPhoto";
import Image from "next/image";

const secciones = {
  perfil: {
    titulo: "Perfil Profesional",
    subtitulo: "Fotógrafo Profesional",
    contenido: (
      <div className="space-y-5">
        <p className="text-gray-300 leading-relaxed">
          Llevo fotografiando desde los 13 años. Lo que comenzó como una curiosidad se fue convirtiendo
          en una forma de pensar y de relacionarme con las imágenes, hasta derivar en una formación
          profesional formal en el Instituto Arcos de Viña del Mar, donde me titulé en 2017 con un
          proyecto de investigación sobre la imagen digital y su reproductibilidad masiva.
        </p>
        <p className="text-gray-300 leading-relaxed">
          A lo largo de ese recorrido he trabajado en distintos géneros: paisaje, arquitectura,
          fotografía 360°, producto y retrato. Pero en paralelo he mantenido una práctica personal
          sostenida en proyectos de autor que exploran la imagen desde otro ángulo: la curaduría,
          el archivo digital, el fotomontaje y más recientemente la imagen generativa.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Para mí no existe una contradicción entre el trabajo técnico y comercial y la producción
          personal. Son dos modos de la misma pregunta.
        </p>
      </div>
    ),
  },
  especializacion: {
    titulo: "Especialización",
    subtitulo: "Áreas de expertise",
    contenido: (
      <div className="space-y-3">
        <div className="flex items-start bg-black/30 p-4 border border-white/5 hover:border-[#FFB300]/20 transition-all duration-300">
          <Image
            src="/images/icons/LEicon.png"
            alt="Icono de Larga Exposición"
            width={72}
            height={72}
            className="mr-4 opacity-90 flex-shrink-0"
          />
          <div>
            <h3 className="font-semibold text-base text-white mb-1">Fotografía de Larga Exposición y Light Painting</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              He desarrollado una técnica personal que combina largas exposiciones con el uso de láser
              de alta energía para intervenir la escena en tiempo real. El resultado es una imagen que
              no podría existir de otra forma: construida, no capturada. La postproducción selectiva
              acentúa las tonalidades y refuerza la intención creativa de cada disparo.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-black/30 p-4 border border-white/5 hover:border-[#FFB300]/20 transition-all duration-300">
          <Image
            src="/images/icons/LAicon.png"
            alt="Icono de Paisaje"
            width={72}
            height={72}
            className="mr-4 opacity-90 flex-shrink-0"
          />
          <div>
            <h3 className="font-semibold text-base text-white mb-1">Fotografía de Paisaje</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              El paisaje es mi laboratorio natural. Me atrae especialmente la montaña en condiciones
              de niebla, la atmósfera que transforma lo familiar en algo indescifrable. Busco imágenes
              que transmitan escala, silencio y la sensación de estar presente en un lugar que muy
              pocos han visto exactamente así.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-black/30 p-4 border border-white/5 hover:border-[#FFB300]/20 transition-all duration-300">
          <Image
            src="/images/icons/360icon.png"
            alt="Icono de Arquitectónica 360"
            width={72}
            height={72}
            className="mr-4 opacity-90 flex-shrink-0"
          />
          <div>
            <h3 className="font-semibold text-base text-white mb-1">Fotografía 360° y Arquitectónica</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Produzco recorridos virtuales inmersivos para inmuebles, museos, espacios educativos y
              proyectos de arquitectura. La tecnología 360° permite que el espectador experimente
              el espacio antes de pisarlo, lo que genera valor real tanto para la venta como para
              la comunicación institucional.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-black/30 p-4 border border-white/5 hover:border-[#FFB300]/20 transition-all duration-300">
          <Image
            src="/images/icons/psicon.png"
            alt="Icono de PostProducción"
            width={72}
            height={72}
            className="mr-4 opacity-90 flex-shrink-0"
          />
          <div>
            <h3 className="font-semibold text-base text-white mb-1">Postproducción Digital</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dominio avanzado de Adobe Lightroom y Photoshop para retoque, edición de color y
              manipulación de imagen. Complementado con conocimientos de diseño gráfico, diagramación
              e impresión digital y offset — lo que me permite acompañar un proyecto desde la captura
              hasta su reproducción final en cualquier soporte.
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
      <div className="space-y-5 text-gray-300">
        <p className="leading-relaxed">
          Entiendo la fotografía como la culminación de un deseo humano antiquísimo, la cúspide de
          una búsqueda: congelar los instantes, confirmar la existencia a pesar de su finitud. Ese
          impulso comenzó mucho antes de la cámara, cuando alguien grabó un animal en la pared de
          una cueva o cuando un pintor se detuvo frente a un paisaje con la intención de retratarlo
          —ese instante en que el creador tiene un clic espontáneo de intención es el origen de la
          fotografía. La fotografía fue la cúspide técnica de ese deseo, pero su esencia espiritual
          es anterior a cualquier aparato.
        </p>

        <p className="leading-relaxed">
          Desde esa convicción, un daguerrotipo, una fotografía de paisaje y un pantallazo de
          videojuego comparten la misma esencia: la intención de preservar las evidencias de
          existencia, real o digital, antes de que se convierta en polvo. La vida digital deja de
          serlo, y sus imágenes —si bien diferentes en su materialidad— tienen el mismo ADN de la
          fotografía.
        </p>

        <p className="leading-relaxed">
          Mi trabajo se mueve entre esa dimensión contemplativa y una práctica dinámica y crítica.
          La masificación de las imágenes transformó el rol del fotógrafo: ya no somos cazadores de
          momentos precisos o especiales, sino agricultores y curadores en medio de una
          superabundancia visual. Eso me interesa tanto como tema de investigación —fue el centro
          de mi tesis{" "}
          <em>La caza de las pantallas</em> (2017)— como práctica cotidiana, visible en proyectos
          como <em>Escrinshots_random</em> y <em>pplabs</em>, donde archivo, intervengo y hago
          dialogar imágenes de distintos orígenes: fotografías propias, capturas digitales,
          fotomontaje e imagen generativa.
        </p>
      </div>
    ),
  },

  servicios: {
    titulo: "Servicios",
    subtitulo: "Lo que puedo ofrecer",
    contenido: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          {
            titulo: "Fotografía Arquitectónica y 360°",
            descripcion: "Documentación de espacios residenciales, comerciales e institucionales. Recorridos virtuales inmersivos para venta, arriendo o presentación de proyectos.",
          },
          {
            titulo: "Fotografía de Productos",
            descripcion: "Imágenes para catálogos, e-commerce y comunicación de marca. Fondo neutro o contextualizado según la identidad del producto.",
          },
          {
            titulo: "Fotografía de Paisaje y Naturaleza",
            descripcion: "Captura en exteriores con énfasis en luz natural, composición atmosférica y condiciones climáticas especiales.",
          },
          {
            titulo: "Larga Exposición y Light Painting",
            descripcion: "Proyectos artísticos y comerciales con técnica de larga exposición e intervención con láser. Resultados únicos e irrepetibles.",
          },
          {
            titulo: "Retratos Artísticos",
            descripcion: "Sesiones orientadas a la expresión personal más que a la formalidad. Para artistas, profesionales y proyectos editoriales.",
          },
          {
            titulo: "Talleres y Clases de Fotografía",
            descripcion: "Formación práctica en fotografía creativa, composición y uso de la luz. Adaptada a distintos niveles y contextos educativos.",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="p-4 bg-black/30 border border-white/5 hover:border-[#FFB300]/25 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFB300]" />
              <div>
                <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-[#FFB300] transition-colors duration-200">
                  {s.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
};

const AboutPhoto = () => {
  return (
    <div className={`flex flex-col min-h-screen bg-[#0a0a0a] ${sourceSansPro.className}`}>
      <HeaderPhoto />
      <main className="flex-grow">
        {/* Mobile: acordeón */}
        <div className="block md:hidden px-4 py-4">
          <MobileSectionsPhoto secciones={secciones} />
        </div>
        {/* Desktop: pestañas */}
        <div className="hidden md:block">
          <DesktopSectionsPhoto secciones={secciones} />
        </div>
      </main>
    </div>
  );
};

export default AboutPhoto;

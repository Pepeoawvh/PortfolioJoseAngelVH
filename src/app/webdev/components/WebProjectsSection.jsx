"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const PROJECTS_DATA = [
  // ── FORMACIÓN ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "P.1 Landing Page Emprendimiento",
    description:
      "Primer proyecto del bootcamp. Landing page para un emprendimiento construida íntegramente con HTML y CSS puro, sin frameworks. Estableció las bases de la estructura semántica, el diseño responsivo y los fundamentos del desarrollo frontend.",
    image: "/images/projects/web/1.png",
    techs: ["HTML", "CSS"],
    category: "formacion",
    featured: false,
    gitUrl: "https://github.com/Pepeoawvh/Proyecto1MMM",
    previewUrl: "https://pepeoawvh.github.io/Proyecto1MMM/",
  },
  {
    id: 2,
    title: "P.2 CRUD Local para registro de pedidos",
    description:
      "Aplicación de gestión de pedidos con operaciones CRUD implementadas directamente en el DOM. Primer acercamiento a la manipulación dinámica de datos en el navegador, sin frameworks ni librerías externas.",
    image: "/images/projects/web/2.png",
    techs: ["HTML", "CSS", "JavaScript"],
    category: "formacion",
    featured: false,
    gitUrl: "https://github.com/Pepeoawvh/PROYECTO2CRUDappTablaPedidos",
    previewUrl: "https://pepeoawvh.github.io/PROYECTO2CRUDappTablaPedidos/",
  },
  {
    id: 3,
    title: "P.3 Busca Patitas, adopción animal",
    description:
      "Dashboard interactivo para adopción de animales que consume APIs externas. Primer proyecto con integración de servicios REST y renderizado dinámico de datos. Incluye filtros y presentación visual organizada de resultados en tiempo real.",
    image: "/images/projects/web/3.png",
    techs: ["HTML", "CSS", "JavaScript", "REST API"],
    category: "formacion",
    featured: false,
    gitUrl: "https://github.com/Pepeoawvh/Proyecto-3",
    previewUrl: "https://pepeoawvh.github.io/Proyecto-3/",
  },
  {
    id: 4,
    title: "P.4 Landing, galería y reservas Restaurant",
    description:
      "Aplicación React con galería, landing y sistema de reservas integrado a Firebase. Primer proyecto con un framework moderno, gestión de estado por componentes y base de datos en la nube.",
    image: "/images/projects/web/4.png",
    techs: ["React", "Firebase", "CSS"],
    category: "formacion",
    featured: false,
    gitUrl: "https://github.com/Pepeoawvh/Proyecto4DWFS",
    previewUrl: "https://ratitagamer.netlify.app",
  },
  {
    id: 5,
    title: "P.5 Clan, cuentas compartidas",
    description:
      "Plataforma fullstack para la gestión de cuentas y gastos compartidos entre grupos. Arquitectura cliente-servidor completa con backend en Express, base de datos MongoDB y frontend React. Primera aplicación con autenticación, rutas protegidas y separación de responsabilidades por capas.",
    image: "/images/projects/web/5.png",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    category: "formacion",
    featured: true,
    gitUrl: "https://github.com/Pepeoawvh/ClanProjectFront",
    previewUrl: "https://devclanproject.netlify.app",
  },
  // ── PARTICULARES ───────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Oscar Fuentes Abogado",
    description:
      "Sitio de presencia digital para un abogado de larga trayectoria que decidió iniciar su carrera independiente. Funciona como carta de presentación y canal directo de captación de clientes a través del formulario de contacto, el cual ha generado vínculos con clientes de importancia. Actualmente en proceso de actualización a tecnologías modernas.",
    image: "/images/projects/web/OFC.svg",
    techs: ["HTML", "JavaScript", "CSS"],
    category: "particulares",
    featured: false,
    gitUrl: "/",
    previewUrl: "/images/projects/6.png",
  },
  {
    id: 10,
    title: "Buen Plan Salud",
    description:
      "Plataforma de captación de leads para un equipo de asesores en planes de salud. Desde su publicación ha generado más de 70 contactos a través del formulario, muchos de los cuales se han convertido en clientes reales del negocio.",
    image: "/images/projects/web/bpcl.svg",
    techs: ["Next.js", "TailwindCSS", "Firebase"],
    category: "particulares",
    featured: false,
    gitUrl: "https://github.com/Pepeoawvh/buenPlanProject",
    previewUrl: "https://www.buenplansalud.cl/",
  },
  {
    id: 11,
    title: "Manos del Marga Marga",
    description:
      "Plataforma web desarrollada desde cero en Next.js para un emprendimiento local de papelería artesanal. Incluye catálogo de productos, integración de pagos con Transbank, control de stock y panel de administración a medida. El sitio reemplazó una solución previa que limitaba la gestión del negocio, logrando mejoras concretas en conversión, visibilidad en búsquedas y facilidad de uso tanto para la clienta como para su equipo.",
    image: "/images/projects/web/mmm.png",
    techs: ["Next.js", "React", "Firebase", "TailwindCSS", "Transbank"],
    category: "particulares",
    featured: true,
    gitUrl: "https://github.com/Pepeoawvh",
    previewUrl: "https://www.manosdelmargamarga.cl/",
  },
  // ── PERSONALES ─────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "100 Registros",
    description:
      "Herramienta personal creada para llevar el conteo exacto de entregas durante mi trabajo como repartidor de encomiendas, con rutas de más de 70 paquetes diarios. Permite registrar entregas, calcular montos de facturación y mantener un control claro del trabajo realizado.",
    image: "/images/projects/web/100reg.svg",
    techs: ["Next.js", "React", "Firebase", "TailwindCSS"],
    category: "personales",
    featured: false,
    gitUrl: "https://github.com/Pepeoawvh/100Registros",
    previewUrl: "https://100registros.vercel.app/",
  },
  {
    id: 9,
    title: "Boda Manita y Carlos",
    description:
      "Invitación de bodas web con contador regresivo, confirmación de asistencia (RSVP) y galería, desarrollada para unos familiares muy queridos. Forma parte de un servicio de invitaciones web para bodas y eventos especiales.",
    image: "/images/projects/web/nycb.svg",
    techs: ["Next.js", "TailwindCSS", "Firebase"],
    category: "personales",
    featured: false,
    gitUrl: "https://github.com/Pepeoawvh/bodaManitaCarlos",
    previewUrl: "https://www.manitaycarlos.com/",
  },
  {
    id: 7,
    title: "Iluminaria 360",
    description:
      "Propuesta de emprendimiento personal en fotografía de espacios con tecnología 360° y fotografía profesional. El sitio presenta el servicio y permite a potenciales clientes explorar el concepto, orientado a revelar arquitectura e interiores en todo su potencial visual.",
    image: "/images/projects/web/Iluminaria.svg",
    techs: ["Next.js", "React", "TailwindCSS"],
    category: "personales",
    featured: true,
    gitUrl: "https://github.com/Pepeoawvh/Iluminaria360",
    previewUrl: "https://iluminaria360.vercel.app/",
  },
];

const CATEGORY_LABELS = {
  particulares: "Proyectos Particulares",
  personales: "Proyectos Personales",
  formacion: "Proyectos de Formación",
};

const WebProjectsSection = () => {
  const [category, setCategory] = useState("particulares");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = PROJECTS_DATA
    .filter((project) => project.category === category)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  const cardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16" id="projects">
      <h2 className="text-4xl font-bold text-white mb-2">Proyectos</h2>
      <div className="h-0.5 w-12 bg-gradient-to-r from-[#2ecc71] to-transparent mb-10" />

      {/* Navegación de categorías — tabs con línea activa */}
      <div className="border-b border-white/10 flex flex-wrap gap-2 md:gap-8 mb-10">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCategory(key)}
            className={`pb-3 text-sm font-medium tracking-wide transition-colors duration-200 border-b-2 -mb-px ${
              category === key
                ? "text-[#2ecc71] border-[#2ecc71]"
                : "text-gray-500 border-transparent hover:text-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Lista de proyectos */}
      <ul ref={ref} className="flex flex-col gap-6">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.35, delay: index * 0.12 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techs={project.techs}
              isFeatured={project.featured}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WebProjectsSection;

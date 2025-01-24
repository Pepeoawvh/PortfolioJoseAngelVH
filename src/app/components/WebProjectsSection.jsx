"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "P.1 Landing Page Emprendimiento",
    description: "Realizada con html + CSS puro",
    image: "/images/projects/1.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "formacion",
    gitUrl: "https://github.com/Pepeoawvh/Proyecto1MMM",
    previewUrl: "https://pepeoawvh.github.io/Proyecto1MMM/",
  },
  {
    id: 2,
    title: "P.2 CRUD Local para registro de pedidos web",
    description: "CRUD / DOM Web App",
    image: "/images/projects/2.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "formacion",
    gitUrl: "https://github.com/Pepeoawvh/PROYECTO2CRUDappTablaPedidos",
    previewUrl: "https://pepeoawvh.github.io/PROYECTO2CRUDappTablaPedidos/",
  },
  {
    id: 3,
    title: "P.3 Busca Patitas, adopción animal",
    description: "API/ Js Dashboard",
    image: "/images/projects/3.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "formacion",
    gitUrl: "https://github.com/Pepeoawvh/Proyecto-3",
    previewUrl: "https://pepeoawvh.github.io/Proyecto-3/",
  },
  {
    id: 4,
    title: "P.4 Landing, galeria y reservas Restaurant",
    description: "Proyecto React, DB Firebase",
    image: "/images/projects/4.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "formacion",
    gitUrl: "https://github.com/Pepeoawvh/Proyecto4DWFS",
    previewUrl: "https://ratitagamer.netlify.app",
  },
  {
    id: 5,
    title: "P.5 Clan, cuentas compartidas",
    description: "React , Express Backend, Mongo DB",
    image: "/images/projects/5.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "formacion",
    gitUrl: "https://github.com/Pepeoawvh/ClanProjectFront",
    previewUrl: "https://devclanproject.netlify.app",
  },
  {
    id: 6,
    title: "Oscar Fuentes Abogado",
    description: "Landing Page para Profesional Oscar Fuentes Jimenez Abogado",
    image: "/images/projects/OFC.svg",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "particulares",
    gitUrl: "/",
    previewUrl: "/images/projects/6.png",
  },
  {
    id: 7,
    title: "Iluminaria 360",
    description: "Proyecto de Fotografía de interiores 360",
    image: "/images/projects/Iluminaria.svg",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "personales",
    gitUrl: "https://github.com/Pepeoawvh/Iluminaria360",
    previewUrl: "https://iluminaria360.vercel.app/",
  },
  {
    id: 8,
    title: "100 Registros",
    description: "Aplicación para gestionar registros",
    image: "/images/projects/100reg.svg",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "personales",
    gitUrl: "https://github.com/Pepeoawvh/100Registros",
    previewUrl: "https://100registros.vercel.app/",
  },
  {
    id: 9,
    title: "Boda Manita y Carlos",
    description: "Sitio web para la boda de Manita y Carlos",
    image: "/images/projects/nycb.svg",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "personales",
    gitUrl: "https://github.com/Pepeoawvh/bodaManitaCarlos",
    previewUrl: "https://www.manitaycarlos.com/",
  },  {
    id: 10,
    title: "Buen Plan Salud",
    description: "Sitio web para la marca Buen Plan, asesorías en planes de salud",
    image: "/images/projects/bpcl.svg",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    category: "particulares",
    gitUrl: "https://github.com/Pepeoawvh/buenPlanProject",
    previewUrl: "https://www.buenplansalud.cl/",
  },
];

const WebProjectsSection = () => {
  const [category, setCategory] = useState("formacion");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.category === category
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      className="animate-fade p-8 animate-delay-300 grid row-span-3 position-relative top-[-300px]  sm:mt-0 z-30 pb-24"
      id="projects"
    >
      <h2 className="text-center text-4xl font-bold text-white relative z-30">
        Proyectos
      </h2>
      <div className="text-white relative mt-12 z-30 flex flex-row justify-center items-center gap-2 py-6">
        <button
          onClick={() => handleCategoryChange("formacion")}
          className={`${
            category === "formacion" ? "bg-primary-600" : ""
          } transition-colors rounded-full px-3 py-2`}
        >
          Proyectos de Formación
        </button>
        <button
          onClick={() => handleCategoryChange("particulares")}
          className={`${
            category === "particulares" ? "bg-primary-600" : ""
          } transition-colors rounded-full px-3 py-2`}
        >
          Proyectos Particulares
        </button>
        <button
          onClick={() => handleCategoryChange("personales")}
          className={`${
            category === "personales" ? "bg-primary-600" : ""
          } transition-colors rounded-full px-3 py-2`}
        >
          Proyectos Personales
        </button>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WebProjectsSection;
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "P.1 Landing Page Emprendimiento",
    description: "Realizada con html + CSS puro",
    image: "/images/projects/1.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    gitUrl: "https://github.com/Pepeoawvh/Proyecto1MMM",
    previewUrl: "https://pepeoawvh.github.io/Proyecto1MMM/",
  },
  {
    id: 2,
    title: "P.2 CRUD Local para registro de pedidos web",
    description: "CRUD Javascript + HTML + CSS",
    image: "/images/projects/2.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    gitUrl: "https://github.com/Pepeoawvh/PROYECTO2CRUDappTablaPedidos",
    previewUrl: "https://pepeoawvh.github.io/PROYECTO2CRUDappTablaPedidos/",
  },
  {
    id: 3,
    title: "P.3 Busca Patitas, adopción animal",
    description: "Api Request, ",
    image: "/images/projects/3.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    gitUrl: "https://github.com/Pepeoawvh/Proyecto-3",
    previewUrl: "https://pepeoawvh.github.io/Proyecto-3/",
  },
  {
    id: 4,
    title: "P.4 Landing, galeria y reservas Restaurant",
    description: "Proyecto React, DB Firebase",
    image: "/images/projects/4.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    gitUrl: "https://github.com/Pepeoawvh/Proyecto4DWFS",
    previewUrl: "https://ratitagamer.netlify.app",
  },
  {
    id: 5,
    title: "P.5 Clan, cuentas compartidas",
    description: "React , Express Backend, Mongo DB",
    image: "/images/projects/5.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    gitUrl: "https://github.com/Pepeoawvh/ClanProjectFront",
    previewUrl: "https://devclanproject.netlify.app",
  },
  {
    id: 6,
    title: "Otros Landing Realizados",
    description: "Oscar Fuentes Jimenez Abogado, Oscar Escudero Dj",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web/Mobile Responsive", "All"],
    gitUrl: "/",
    previewUrl: "/images/projects/6.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      className="grid grid row-span-3 position-relative top-[-300px]  md:mt-0 mt-12 z-30"
      id="projects"
    >
      <h2
        className="text-center text-4xl font-bold text-white  relative
     z-50"
      >
        Proyectos
      </h2>
      <div
        className="text-white relative
     z-50 flex flex-row justify-center items-center gap-2 py-6"
      >
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="Web/Mobile Responsive"
          isSelected={tag === "Web"}
        />
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

export default ProjectsSection;

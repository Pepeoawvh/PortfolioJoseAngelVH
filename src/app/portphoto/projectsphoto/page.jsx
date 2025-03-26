import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProyectosPh = () => {
  const proyectos = [
    {
      src: "/images/proyecto1.jpg",
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      link: "/proyecto1",
    },
    {
      src: "/images/proyecto2.jpg",
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      link: "/proyecto2",
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="grid select-none grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {proyectos.map((proyecto, index) => (
        <div key={index} className="border p-4 rounded-md">
          <Image src={proyecto.src} alt={proyecto.title} width={300} height={200} className="rounded-md" />
          <h3 className="text-lg font-semibold mt-2">{proyecto.title}</h3>
          <p className="text-sm">{proyecto.description}</p>
          <Link href={proyecto.link} className="text-[#FFB300] hover:text-yellow-400">
            Ver más
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProyectosPh;
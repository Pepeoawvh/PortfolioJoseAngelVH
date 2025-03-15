import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group/card transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Contenedor de la imagen con efecto de borde en hover */}
      <div
        className="h-52 md:h-64 rounded-t-xl relative group overflow-hidden border border-transparent transition-all duration-300 group-hover/card:border-[#2ecc71]/30 group-hover/card:shadow-lg group-hover/card:shadow-[#2ecc71]/10"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay al hacer hover */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#0a1914] bg-opacity-0 hidden group-hover:grid group-hover:grid-cols-2 group-hover:bg-opacity-90 transition-all duration-500">
          {/* Botón de repositorio */}
          <div className="flex flex-col justify-center items-center">
            <Link
              href={gitUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#2ecc71]/50 hover:border-[#2ecc71] group/link transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="h-10 w-10 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#2ecc71] transition-all duration-300" />
              {/* Efecto de halo */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 bg-[#2ecc71]/5 blur-sm"></span>
            </Link>
            <span className="text-gray-300 mt-2 text-sm font-medium group-hover/link:text-[#2ecc71] transition-colors duration-300">Repositorio</span>
          </div>

          {/* Botón de vista previa */}
          <div className="flex flex-col justify-center items-center">
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#d63384]/40 hover:border-[#d63384]/80 group/link transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon className="h-10 w-10 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#d63384]/80 transition-all duration-300" />
              {/* Efecto de halo */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 bg-[#d63384]/5 blur-sm"></span>
            </Link>
            <span className="text-gray-300 mt-2 text-sm font-medium group-hover/link:text-[#d63384]/80 transition-colors duration-300">Vista Previa</span>
          </div>
        </div>
      </div>
      
      {/* Contenedor de la información */}
      <div className="text-white rounded-b-xl mt-0 bg-[#0a1914] py-4 px-4 border-t-0 border-x border-b border-[#2ecc71]/10 transition-all duration-300 group-hover/card:border-[#2ecc71]/20">
        {/* Título con decoración */}
        <div className="relative mb-2">
          <h5 className="text-xl font-semibold">{title}</h5>
          <div className="h-0.5 w-12 bg-gradient-to-r from-[#2ecc71]/50 to-transparent mt-1 transition-all duration-300 group-hover/card:w-24"></div>
        </div>
        
        {/* Descripción */}
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
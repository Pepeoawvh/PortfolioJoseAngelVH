import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const TechBadge = ({ label }) => (
  <span className="text-xs px-2 py-0.5 bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/20 font-mono tracking-wide">
    {label}
  </span>
);

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techs = [], isFeatured = false }) => {
  if (isFeatured) {
    return (
      <div className="group/card flex flex-col md:flex-row border-l-2 border-[#2ecc71] bg-[#0d1f18] transition-all duration-300 hover:bg-[#0f2419]">
        {/* Imagen */}
        <div
          className="w-full md:w-1/2 h-64 md:h-auto md:min-h-[300px] relative overflow-hidden flex-shrink-0"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-[#0a1914]/0 group-hover/card:bg-[#0a1914]/65 transition-all duration-500 flex items-center justify-center gap-10 opacity-0 group-hover/card:opacity-100">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 text-gray-300 hover:text-[#2ecc71] transition-colors duration-200"
            >
              <CodeBracketIcon className="h-8 w-8" />
              <span className="text-xs font-medium">Repositorio</span>
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 text-gray-300 hover:text-[#d63384] transition-colors duration-200"
            >
              <EyeIcon className="h-8 w-8" />
              <span className="text-xs font-medium">Ver Sitio</span>
            </Link>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-between p-8 flex-1 border-t border-[#2ecc71]/10 md:border-t-0 md:border-l">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#2ecc71]/70 uppercase mb-3 block">
              — Proyecto Destacado
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{title}</h3>
            {techs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {techs.map((t, i) => (
                  <TechBadge key={i} label={t} />
                ))}
              </div>
            )}
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#2ecc71] transition-colors duration-200 border border-white/10 hover:border-[#2ecc71]/30 px-4 py-2"
            >
              <CodeBracketIcon className="h-4 w-4" />
              Repositorio
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#d63384] transition-colors duration-200 border border-white/10 hover:border-[#d63384]/30 px-4 py-2"
            >
              <EyeIcon className="h-4 w-4" />
              Ver Sitio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group/card flex flex-col md:flex-row border border-white/5 bg-[#0d1f18] hover:border-white/10 transition-all duration-300">
      {/* Imagen */}
      <div
        className="w-full md:w-2/5 h-48 relative overflow-hidden flex-shrink-0"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0a1914]/0 group-hover/card:bg-[#0a1914]/65 transition-all duration-500 flex items-center justify-center gap-8 opacity-0 group-hover/card:opacity-100">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-gray-300 hover:text-[#2ecc71] transition-colors duration-200"
          >
            <CodeBracketIcon className="h-6 w-6" />
            <span className="text-xs">Repositorio</span>
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-gray-300 hover:text-[#d63384] transition-colors duration-200"
          >
            <EyeIcon className="h-6 w-6" />
            <span className="text-xs">Ver Sitio</span>
          </Link>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between p-6 flex-1 border-t border-white/5 md:border-t-0 md:border-l group-hover/card:border-white/10 transition-colors duration-300">
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
          {techs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {techs.map((t, i) => (
                <TechBadge key={i} label={t} />
              ))}
            </div>
          )}
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#2ecc71] transition-colors duration-200"
          >
            <CodeBracketIcon className="h-3.5 w-3.5" />
            Repositorio
          </Link>
          <span className="text-gray-700">·</span>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#d63384] transition-colors duration-200"
          >
            <EyeIcon className="h-3.5 w-3.5" />
            Ver Sitio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
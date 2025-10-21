"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

/* CertGroup: acordeón accesible con details/summary y animación suave */
const CertGroup = ({ title, defaultOpen = false, children }) => (
  <details className="group border border-white/10 rounded-md bg-black/30" open={defaultOpen}>
    <summary className="cursor-pointer px-4 py-3 text-white hover:text-[#2ecc71] transition-colors flex items-center justify-between list-none">
      <span className="font-semibold tracking-wide">{title}</span>
      <span className="transition-transform duration-200 group-open:rotate-180">▾</span>
    </summary>

    <div
      className="overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out
                 max-h-0 opacity-0 translate-y-1
                 group-open:max-h-[1200px] group-open:opacity-100 group-open:translate-y-0"
    >
      <div className="px-3 pb-4">
        {children}
      </div>
    </div>
  </details>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="animate-fade animate-delay-100 pb-12 grid grid-cols-1 md:grid-cols-2 ml-6">
        <div>
          <h2 className="text-lg font-semibold text-[#2ecc71] mb-2">FullStack</h2>
          <ul className="grid grid-cols-2 gap-x-12 list-disc pl-2 marker:text-[#2ecc71]">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next Js</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="animate-fade animate-delay-100 list-disc pl-6 pb-12 marker:text-[#2ecc71]">
        <li>BootCamp Desarrollo Web FullStack Universidad del Desarrollo</li>
        <li>BootCamp DevOps Adalid/SENCE</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-3 animate-fade animate-delay-100 pb-2">
        {/* Grupo: Bootcamp Fullstack Javascript */}
        <CertGroup title="Bootcamp Fullstack Javascript" defaultOpen>
          <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="https://www.credly.com/badges/f83b2e7b-43f3-4135-8d35-63212c36ce4d/public_url"
              className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
              <Image src="https://images.credly.com/size/680x680/images/791d0469-ca15-4bc9-b9b3-2b8dca821b62/image.png"
                width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"/>
            </Link>
            <Link href="https://www.credly.com/badges/e0a8aa56-d906-4040-a1a6-254d02053649/public_url"
              className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
              <Image src="https://images.credly.com/size/680x680/images/71ed1274-3d7c-40f4-9194-e464643719e3/image.png"
                width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"/>
            </Link>
            <Link href="https://www.credly.com/badges/299da870-993e-4be6-a7fb-05a6cb647ac5/public_url"
              className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
              <Image src="https://images.credly.com/size/680x680/images/50a7358c-80d1-4a5d-a1d7-a9e0997de2be/image.png"
                width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"/>
            </Link>
            <Link href="https://www.credly.com/badges/ef2ec8e9-fb6c-4fe0-8e65-c8ff48c7fef2/public_url"
              className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
              <Image src="https://images.credly.com/size/680x680/images/5a6985ec-c5f8-4c59-8668-8278971a368e/image.png"
                width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"/>
            </Link>
            <Link href="https://www.credly.com/badges/c6dd2b2c-9149-429d-94de-5ceed5770d58/public_url"
              className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
              <Image src="https://images.credly.com/size/680x680/images/17dd77a2-4101-4d2b-84da-425fb5591c9a/image.png"
                width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"/>
            </Link>
            <Link href="https://www.credly.com/badges/6359af9b-0d3f-40e0-ae4b-ce284b65c4b9/public_url"
              className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
              <Image src="https://images.credly.com/size/680x680/images/0513e558-a243-40ca-a27a-dd088eed3e4f/image.png"
                width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"/>
            </Link>
          </div>
        </CertGroup>

        {/* Grupo: DevOps */}
        <CertGroup title="DevOps">
          <div className="grid grid-cols-1 sm:grid-cols-[auto_max-content] gap-4 items-center">
            {/* Insignia */}
            <Link
              href="/docs/CertificadoDevOps.pdf"
              download="CertificadoDevOps.pdf"
              className="justify-self-center sm:justify-self-start transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2"
              aria-label="Descargar certificado DevOps"
            >
              <Image
                src="/images/projects/web/insigdevops.png"
                width={150}
                height={150}
                alt="Insignia DevOps"
                className="rounded-sm"
                loading="lazy"
              />
            </Link>

            {/* Botón descargar PDF al lado de la insignia */}
            <a
              href="/docs/CDVOPS.g.pdf"
              download="CertificadoDevOps.pdf"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#0f2c1b] text-white border border-[#2ecc71]/30 hover:bg-[#2ecc71] hover:text-black transition-colors shadow-md hover:shadow-[#2ecc71]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/40"
            >
              Descargar certificado
            </a>


          </div>
        </CertGroup>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white bg-[#0a1914]" id="about">
      {/* Grid estable: altura de imagen fija para evitar “saltos” */}
      <div className="mx-5 px-4 xl:px-16 pb-12 grid md:grid-cols-2 gap-8 xl:gap-16 items-start">
        {/* Columna izquierda (imagen) con wrapper estable */}
        <div className="relative">
          <div className="relative w-full min-h-[420px] md:min-h-[520px] rounded-lg overflow-hidden border border-[#2ecc71]/10 shadow-lg">
            <Image
              src="/images/about-image.png"
              alt="Jose Angel VH"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-center"
              priority={false}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300"
              style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(46,204,113,0.25), transparent 70%)" }}
            />
          </div>
        </div>

        {/* Columna derecha (texto + tabs) */}
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <p className="pt-2 text-base lg:text-lg px-1 text-gray-300 leading-relaxed">
            ¡Hola! Soy Fotógrafo Profesional y <span className="text-[#2ecc71]">Desarrollador Fullstack</span>. Tengo
            experiencia trabajando con Node.js y Git, en FrontEnd HTML, CSS, JavaScript con React/Next. En backend, Express, MongoDB y librerías asociadas.
          </p>
          <p className="pt-3 text-base lg:text-lg px-1 text-gray-300 leading-relaxed">
            Busco expandir constantemente mis conocimientos y habilidades en equipos multidisciplinarios.
          </p>

          <div className="flex flex-row justify-start mt-6 border-b border-[#2ecc71]/20 mb-3">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              <span className="relative after:block after:h-[2px] after:bg-[#2ecc71] after:scale-x-0 after:origin-left group-hover:after:scale-x-100 transition-transform duration-200">
                Habilidades
              </span>
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              <span className="relative after:block after:h-[2px] after:bg-[#2ecc71] after:scale-x-0 after:origin-left group-hover:after:scale-x-100 transition-transform duration-200">
                Educación
              </span>
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              <span className="relative after:block after:h-[2px] after:bg-[#2ecc71] after:scale-x-0 after:origin-left group-hover:after:scale-x-100 transition-transform duration-200">
                Certificaciones
              </span>
            </TabButton>
          </div>

          <div className="mt-2">
            <div className="transition-opacity duration-200 ease-out">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
            <Link
              href="/docs/JVCVWD25.pdf"
              download="JVCVWD25.pdf"
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-[#0f2c1b] border border-[#2ecc71]/30 rounded-md transition-colors duration-200 hover:bg-[#2ecc71] hover:text-black shadow-md hover:shadow-[#2ecc71]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/40"
            >
              Descargar CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

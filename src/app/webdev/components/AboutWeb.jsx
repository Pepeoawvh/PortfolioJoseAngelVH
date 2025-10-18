"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

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
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="animate-fade animate-delay-100 grid justify-items-center grid-cols-2 md:grid-cols-3 gap-4 pb-12">
        {/* INSIGNIAS */}
        <Link href="https://www.credly.com/badges/f83b2e7b-43f3-4135-8d35-63212c36ce4d/public_url"
          className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
          <Image
            src="https://images.credly.com/size/680x680/images/791d0469-ca15-4bc9-b9b3-2b8dca821b62/image.png"
            width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"
          />
        </Link>
        <Link href="https://www.credly.com/badges/e0a8aa56-d906-4040-a1a6-254d02053649/public_url"
          className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
          <Image
            src="https://images.credly.com/size/680x680/images/71ed1274-3d7c-40f4-9194-e464643719e3/image.png"
            width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"
          />
        </Link>
        <Link href="https://www.credly.com/badges/299da870-993e-4be6-a7fb-05a6cb647ac5/public_url"
          className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
          <Image
            src="https://images.credly.com/size/680x680/images/50a7358c-80d1-4a5d-a1d7-a9e0997de2be/image.png"
            width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"
          />
        </Link>
        <Link href="https://www.credly.com/badges/ef2ec8e9-fb6c-4fe0-8e65-c8ff48c7fef2/public_url"
          className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
          <Image
            src="https://images.credly.com/size/680x680/images/5a6985ec-c5f8-4c59-8668-8278971a368e/image.png"
            width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"
          />
        </Link>
        <Link href="https://www.credly.com/badges/c6dd2b2c-9149-429d-94de-5ceed5770d58/public_url"
          className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
          <Image
            src="https://images.credly.com/size/680x680/images/17dd77a2-4101-4d2b-84da-425fb5591c9a/image.png"
            width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"
          />
        </Link>
        <Link href="https://www.credly.com/badges/6359af9b-0d3f-40e0-ae4b-ce284b65c4b9/public_url"
          className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]/30 rounded-md p-2">
          <Image
            src="https://images.credly.com/size/680x680/images/0513e558-a243-40ca-a27a-dd088eed3e4f/image.png"
            width={150} height={150} alt="Certificacion" className="rounded-sm" loading="lazy"
          />
        </Link>
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
      <div className="grid auto-rows-min mx-5 md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 xl:px-16 pb-12">

        {/* Imagen con halo sutil al hover */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-lg blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-[radial-gradient(closest-side,rgba(46,204,113,0.25),transparent_70%)]" />
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            className="relative rounded-lg justify-self-center self-start border border-[#2ecc71]/10 shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
            alt="Jose Angel VH"
            priority={false}
          />
        </div>

        {/* Texto con slide-up discreto */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full animate-fade-up animate-once animate-duration-300 animate-ease-out">
          <p className="pt-6 text-base lg:text-lg px-3 text-gray-300 leading-relaxed">
            ¡Hola! Soy Fotógrafo Profesional y <span className="text-[#2ecc71]">Desarrollador Fullstack</span>. Tengo
            experiencia trabajando con Node.js y Git, en FrontEnd HTML, CSS,
            JavaScript para proyectos React principalmente utilizando Next. En
            backend tengo conocimientos de Express, MongoDB y librerías
            asociadas.
          </p>
          <p className="pt-3 text-base lg:text-lg px-3 text-gray-300 leading-relaxed">
            Busco expandir constantemente mis conocimientos y habilidades. Tengo
            mucha experiencia trabajando con equipos multidisciplinarios y
            diversos. Me interesa participar en proyectos para aumentar mi
            experiencia.
          </p>

          {/* Tabs con micro‑animación en subrayado */}
          <div className="flex flex-row justify-start mt-8 border-b border-[#2ecc71]/20 mb-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <span className="relative after:block after:h-[2px] after:bg-[#2ecc71] after:scale-x-0 after:origin-left group-hover:after:scale-x-100 transition-transform duration-200">
                Habilidades
              </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              <span className="relative after:block after:h-[2px] after:bg-[#2ecc71] after:scale-x-0 after:origin-left group-hover:after:scale-x-100 transition-transform duration-200">
                Educación
              </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              <span className="relative after:block after:h-[2px] after:bg-[#2ecc71] after:scale-x-0 after:origin-left group-hover:after:scale-x-100 transition-transform duration-200">
                Certificaciones
              </span>
            </TabButton>
          </div>

          {/* Contenido de tab con crossfade corto */}
          <div className="mt-4 transition-opacity duration-200 ease-out">
            {TAB_DATA.find((t) => t.id === tab).content}
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

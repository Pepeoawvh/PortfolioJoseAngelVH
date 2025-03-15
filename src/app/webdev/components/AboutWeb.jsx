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
      <div className="animate-fade pb-12 animate-delay-200 grid grid-cols-1 md:grid-cols-2 ml-6">
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
      <ul className="animate-fade animate-delay-200 list-disc pl-6 pb-12 marker:text-[#2ecc71]">
        <li>BootCamp Desarrollo Web FullStack Universidad del Desarrollo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid animate-fade animate-delay-200 justify-items-center grid-cols-2 md:grid-cols-3 gap-4 pb-12">
        {/* INSIGNIA 1 */}
        <Link href="https://www.credly.com/badges/f83b2e7b-43f3-4135-8d35-63212c36ce4d/public_url" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg  hover:shadow-[#2ecc71]/20 rounded-full p-2 ">
          <Image
            src="https://images.credly.com/size/680x680/images/791d0469-ca15-4bc9-b9b3-2b8dca821b62/image.png"
            width={150}
            height={150}
            alt="Certificacion"
            className="rounded-sm"
          />
        </Link>
        {/* INSIGNIA 2 */}
        <Link href="https://www.credly.com/badges/e0a8aa56-d906-4040-a1a6-254d02053649/public_url" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2ecc71]/20 rounded-full p-2 ">
          <Image
            src="https://images.credly.com/size/680x680/images/71ed1274-3d7c-40f4-9194-e464643719e3/image.png"
            width={150}
            height={150}
            alt="Certificacion"
            className="rounded-sm"
          />
        </Link>
        {/* INSIGNIA 3 */}
        <Link href="https://www.credly.com/badges/299da870-993e-4be6-a7fb-05a6cb647ac5/public_url" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2ecc71]/20 rounded-full p-2 ">
          <Image
            src="https://images.credly.com/size/680x680/images/50a7358c-80d1-4a5d-a1d7-a9e0997de2be/image.png"
            width={150}
            height={150}
            alt="Certificacion"
            className="rounded-sm"
          />
        </Link>
        {/* INSIGNIA 4 */}
        <Link href="https://www.credly.com/badges/ef2ec8e9-fb6c-4fe0-8e65-c8ff48c7fef2/public_url" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2ecc71]/20 rounded-full p-2 ">
          <Image
            src="https://images.credly.com/size/680x680/images/5a6985ec-c5f8-4c59-8668-8278971a368e/image.png"
            width={150}
            height={150}
            alt="Certificacion"
            className="rounded-sm"
          />
        </Link>
        {/* INSIGNIA 5 */}
        <Link href="https://www.credly.com/badges/c6dd2b2c-9149-429d-94de-5ceed5770d58/public_url" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2ecc71]/20 rounded-full p-2 ">
          <Image
            src="https://images.credly.com/size/680x680/images/17dd77a2-4101-4d2b-84da-425fb5591c9a/image.png"
            width={150}
            height={150}
            alt="Certificacion"
            className="rounded-sm"
          />
        </Link>
        {/* INSIGNIA 6 */}
        <Link href="https://www.credly.com/badges/6359af9b-0d3f-40e0-ae4b-ce284b65c4b9/public_url" 
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2ecc71]/20 rounded-full p-2 ">
          <Image
            src="https://images.credly.com/size/680x680/images/0513e558-a243-40ca-a27a-dd088eed3e4f/image.png"
            width={150}
            height={150}
            alt="Certificacion"
            className="rounded-sm"
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
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white animate-fade animate-delay-200 bg-[#0a1914]" id="about">

      
      <div className="grid auto-rows-min mx-5 md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 xl:px-16 pb-12">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2ecc71]/30 to-[#d63384]/10 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            className="relative rounded-lg justify-self-center self-start border border-[#2ecc71]/10 shadow-lg"
            alt="Jose Angel VH"
          />
        </div>
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
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
          
          <div className="flex flex-row justify-start mt-8 border-b border-[#2ecc71]/20 mb-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educación
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificaciones
            </TabButton>
          </div>
          
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
            <Link
              href="/docs/JVCVWD25.pdf"
              download="JVCVWD25.pdf"
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-[#0f2c1b] border border-[#2ecc71]/30 rounded-md transition-all duration-300 hover:bg-[#2ecc71] hover:text-black shadow-md hover:shadow-[#2ecc71]/30"
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
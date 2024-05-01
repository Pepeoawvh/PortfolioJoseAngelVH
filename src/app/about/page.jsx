"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="animate-fade animate-delay-200 grid grid-cols-2 ml-6">
        <div>
          <h2 className="underline text-lg">FullStack</h2>
          <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next Js</li>
          </ul>
        </div>
        <div>
          <h2 className="underline text-lg">Fotografía/Diseño</h2>
          <ul className="list-disc pl-2">
            <li>Photoshop - Avanzado</li>
            <li>Lightroom</li>
            <li>Illustrator</li>
            <li>Fotografía de estudio</li>
            <li>Tecnicas fotográficas</li>
            <li>Gestion de archivo fotográfico</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="animate-fade animate-delay-200 list-disc pl-2">
        <li>BootCamp Desarrollo Web FullStack Universidad del Desarrollo</li>
        <li>
          Fotografia Profesional, Instituto Profesional Arcos Viña del Mar
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="animate-fade animate-delay-200 grid grid-cols-3 ">
      {/* INSIGNIA 1 */}
        <Link href="https://www.credly.com/badges/f83b2e7b-43f3-4135-8d35-63212c36ce4d/public_url">
          <Image
            src="https://images.credly.com/size/680x680/images/791d0469-ca15-4bc9-b9b3-2b8dca821b62/image.png"
            width={150}
            height={150}
          />
          {/* INSIGNIA 2 */}
        </Link>
        <Link href="https://www.credly.com/badges/e0a8aa56-d906-4040-a1a6-254d02053649/public_url">
          <Image
            src="https://images.credly.com/size/680x680/images/71ed1274-3d7c-40f4-9194-e464643719e3/image.png"
            width={150}
            height={150}
          />
        </Link>
        {/* INSIGNIA 3 */}
        <Link href="https://www.credly.com/badges/299da870-993e-4be6-a7fb-05a6cb647ac5/public_url">
          <Image
            src="https://images.credly.com/size/680x680/images/50a7358c-80d1-4a5d-a1d7-a9e0997de2be/image.png"
            width={150}
            height={150}
          />
        </Link>
        {/* INSIGNIA 4 */}
        <Link href="https://www.credly.com/badges/ef2ec8e9-fb6c-4fe0-8e65-c8ff48c7fef2/public_url">
          <Image
            src="https://images.credly.com/size/680x680/images/5a6985ec-c5f8-4c59-8668-8278971a368e/image.png"
            width={150}
            height={150}
          />
        </Link>
        {/* INSIGNIA 5 */}
        <Link href="https://www.credly.com/badges/c6dd2b2c-9149-429d-94de-5ceed5770d58/public_url">
          <Image
            src="https://images.credly.com/size/680x680/images/17dd77a2-4101-4d2b-84da-425fb5591c9a/image.png"
            width={150}
            height={150}
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
    <section className="text-white animate-fade animate-delay-200]" id="about">
      <div className=" mx-5 items-start md:grid md:grid-cols-2 sm:mt-0 mt-20 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          className="rounded-md justify-self-center self-start mt-10"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-10 text-center">
            Perfil Profesional
          </h2>
          <p className="text-base lg:text-lg px-3">
            Soy Fotógrafo Profesional y Desarrollador Fullstack. Tengo
            experiencia trabajando con Node.js y Git, en FrontEnd HTML, CSS,
            JavaScript para proyectos React o Next. En backend Express y MongoDB
            y librerías. Me considero una persona curiosa, entusiasta y
            autodidacta. Además, tengo un alto nivel de compromiso lo que me
            permite aprender rápida y efectivamente aquello en lo que
            incursiono. Busco expandir constantemente mis conocimientos y
            habilidades. Tengo mucha experiencia trabajando con equipos
            multidisciplinarios y diversos. Me interesa participar en proyectos
            para aumentar mi experiencia.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

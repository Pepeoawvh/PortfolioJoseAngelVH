"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";
const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Hablemos!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Estoy en busqueda de nuevas experiencias laborales, me interesa
          participar en proyectos novedosos con equipos creativos y
          comprometidos. Hablemos! Tengo experiencia en el area de las artes
          visuales y la fotografía, desde donde puedo aportar con un enfoque
          diferente a distintos grupos de trabajo.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Pepeoawvh">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-vald%C3%A9s-hernandez-757124149/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      <Form />
    </section>
  );
};

export default EmailSection;

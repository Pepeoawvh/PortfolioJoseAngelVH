"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import CarruselCircular from "./CarruselCircular";
const HeroSection = () => {
  return (
    <section className=" animate-fade animate-delay-300 d-grid items-start h-[400px] md:h-[700px] sm:px-6">
      <div className="grid grid-cols-1 grid-rows-1  justify-items-center md:px-6 items-start sm:grid-cols-12 sm:place-self-start sm:grid-rows-1 h-[500px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8  text-center sm:text-left mt-8 sm:mt-0 sm:place-self-start z-30"
        >
          <h1 className=" sm:mt-12 mt-4 text-white text-[1.4rem] sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold ">
            <span className=" mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-700  z-50">
              ¡Hola! <br></br>Mi nombre es José Angel{" "}
            </span>
            <br></br>{" "}
            <TypeAnimation
              sequence={[
                "Desarrollador Fullstack",
                3000,
                "Desarrollador Fullstack",
                3000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            /><br/>
            <TypeAnimation
              sequence={[
                "Fotógrafo Profesional",
                3000,
                "Fotógrafo Profesional",
                3000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"></p>
          <div className="sm:mt-12 mt-16">
            <Link
              href="#form"
              className=" mb-3 px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 to-secondary-600 hover:bg-slate-200 text-white "
            >
              Contacto
            </Link>
            <a
              href="/CVJVH2024.pdf"
              download="CVJVH2024.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-100 to-primary-500 hover:bg-slate-800 text-white mt-3 "
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 z-50">
              <span>
            Descargar CV
        </span>
              </span>
            </a>
          </div>
        </motion.div>
        <div className="grid z-10 items-start">
          <CarruselCircular />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="d-grid align-content-lg-center lg:py-10 z-50">
      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-12 sm:place-self-start sm:grid-rows-1 z-50 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left sm:place-self-start z-50"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-6xl lg:text-3xm lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-500">
              ¡Hola!, soy{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "José Ángel",
                7000,
                "FullStack Developer",
                2000,
                "Fotógrafo Profesional",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 to-secondary-600 hover:bg-slate-200 text-white"
            >
              Contacto
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-300 to-secondary-600 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Descargar CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 z-10"
        >
       
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden object-cover">
            <Image
              src="/images/photos/ProfileRaw.jpg"
              alt="hero image"
              className="object-cover w-full h-full"
              layout="fixed"
              width={2000}
              height={2000}
            />
          </div>
        </motion.div>
        <div className=" hidden sm:grid absolute -top-20 -right-40 -z-0  ">
  <div className="rounded-full bg-[#cbc5c5] w-[250px] h-[250px] lg:w-[900px] lg:h-[900px] overflow-hidden  opacity-70 -z-20">
    <Image
      src="/images/photos/Glaciar.jpg"
      alt="hero image"
      className="object-cover w-full h-full "
      width={4000}
      height={4000}
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;
